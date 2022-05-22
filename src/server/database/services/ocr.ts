import vision from "@google-cloud/vision";
import { google } from "@google-cloud/vision/build/protos/protos";
import path from "path";
import stream from "stream";

import { siteConfig } from "../../../site-config";

const client = new vision.ImageAnnotatorClient({
  projectId: siteConfig.server.storage.projectId,
  autoRetry: true,
  keyFilename: path.join(__dirname, "..", siteConfig.server.storage.keyFile),
});

import { Content, Menu } from "../schemas";
import { storage } from "./storage";

const OCRService = {
  GET: async ({ request, response }) => {
    const menus = await Menu.find();
    const ret = menus;

    return response?.send ? response.send(ret).status(200) : ret;
  },
  POST: async ({ request, response }) => {
    try {
      const { objects } = request.body;

      const bucketName = siteConfig.server.storage.bucket;

      const textDetectionPromises: Promise<
        google.cloud.vision.v1.IAnnotateImageResponse[]
      >[] = [];
      objects.forEach((object) => {
        console.log(object);

        textDetectionPromises.push(
          client.textDetection(
            `gs://${bucketName}/${object.items.photoOneName}`
          )
        );
        textDetectionPromises.push(
          client.textDetection(
            `gs://${bucketName}/${object.items.photoTwoName}`
          )
        );
      });

      const textDetectionArray = await Promise.all(textDetectionPromises);
      console.log(textDetectionArray);

      const contentUpdatePromises: Promise<any>[] = [];
      let imageAccess = 0
      for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        console.log(
          textDetectionArray[i][0].textAnnotations?.[0]?.description,
          "YO"
        );
        console.log(object);
        

        contentUpdatePromises.push(
          Content.updateOne({
            name: object.name,
            items: {
              ...object.items,
              textDetectionOne:
                textDetectionArray[imageAccess][0].textAnnotations?.[0]?.description,
              textDetectionTwo:
                textDetectionArray[imageAccess + 1][0].textAnnotations?.[0]?.description,
            },
          })
        );
        imageAccess += 2
      }

      await Promise.all(contentUpdatePromises);

      // const filename = "b0268729a4b10d5362c3d0e6e9d9f622";

      // console.log(`Looking for text in image ${filename}`);
      // const [textDetections] = await client.textDetection(
      //   `gs://${bucketName}/${filename}`
      // );
      // const res = textDetections.textAnnotations;
      // console.log(res);

      return response.status(200).send();
    } catch (err) {
      console.error(err);
      return response.status(500).send();
    }
  },
  PATCH: async ({ request, response }) => {
    try {
      const { menus } = request.body;

      const [menu] = menus;
      const updatedMenu = await Menu.updateOne({ _id: menu._id }, menu);

      return response.status(200).send();
    } catch (err) {
      console.error(err);
      return response.status(500).send();
    }
  },
};

export default OCRService;
