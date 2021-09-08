import axios from "axios";

const Request = ({
  url,
  method,
  data,
}: {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  url: string;
  data?: any;
}) => {
  try {
    const config: any = { url, method };
    if (data) config.data = data;

    return axios(config);
  } catch (err) {
    console.log(err);
  }
};

export default Request;
