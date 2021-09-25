import React, { useState } from "react";
import { observer } from "mobx-react";
import store from "../store";

import {
  Layout,
  Typography,
  Content,
  Inputs,
  Editable,
  Element,
  Composed,
} from "../components";
import { siteConfig } from "../../site-config";
import NavMenu from "../components/Nav/NavMenus";
import NavLogo from "../components/Nav/NavLogo";
import DesktopMenu from "../components/Nav/NavMenus/DesktopMenu";
import Util from "../util";

interface DefaultState {
  base: Array<string>;
}

interface Props {
  defaultState: DefaultState;
}

const Home: React.FC<Props> = (props) => {
  // const [defaultState, setDefaultState] = useState({});

  return (
    <React.Fragment>
      <Layout.WindoW
        id="home"
        init
        xAlign="flex-start"
        yAlign="flex-start"
        column
      >
        <Layout.Flex
          margin="1em 0 0 0"
          column
          xAlign="center"
          yAlign="flex-start"
        >
          {store.window.clientWidth >
            siteConfig.client.required.layouts.tablet && (
            <Layout.Flex margin="1em 0 0" xAlign="center" yAlign="center">
              <DesktopMenu></DesktopMenu>
            </Layout.Flex>
          )}
          {/* <Composed.Text accessor="homeLandingText" page='home'></Composed.Text> */}
          <Typography.Typography
            color="textQuinary"
            variant="h3"
            displayAlign={{ alignSelf: "center" }}
            textAlign="center"
            margin=".5em 0 0"
            weight="bold"
          >
            Tom's Outdoor Maintenance
          </Typography.Typography>
          <Typography.Typography margin='0 0 1em' color="textQuinary" variant="h6">
            (860) 830-3865
          </Typography.Typography>
          <Content.Image
            boxShadow
            src="/assets/images/services.jpeg"
          ></Content.Image>
          <Typography.Typography
            color="textQuinary"
            variant="p"
            displayAlign={{ alignSelf: "center" }}
            textAlign="center"
            margin="2em 0"
            weight="500"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography.Typography>
        </Layout.Flex>
      </Layout.WindoW>
      <Layout.WindoW
        xAlign="center"
        yAlign="center"
        column
        background="backgroundSecondary"
      >
        <Layout.Flex
          id="dumpster"
          margin="2em 0"
          column
          yAlign="center"
          xAlign="center"
        >
          <Typography.Typography
            color="textTertiary"
            variant="h3"
            textAlign="center"
            margin="0 0 1em"
          >
            Dumpster Rentals
          </Typography.Typography>{" "}
          <Layout.Grid
            gridGap="1.5em"
            centerMobile
            margin="1em 0 3.5em"
            layout={[50, 50]}
          >
            <Content.Image
              boxShadow={true}
              maxWidth="20em"
              width="100%"
              src="/assets/images/dump.jpg"
            ></Content.Image>
            <Layout.Flex column yAlign='center' xAlign="center">
              <Typography.Typography
                color="textTertiary"
                variant="p"
                displayAlign={{ alignSelf: "center", justifySelf: "center" }}
                textAlign="left"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography.Typography>

              <Element.Buttons.Button
                color="textQuinary"
                background="backgroundPrimary"
                variant="h5"
                margin="2em 0"
                onClick={() => {
                  Util.Download.downloadFileFromPath({
                    fileName:
                      "Toms Outdoor Maintenance Dumpster Rental Contract.pdf",
                    path: "/assets/pdfs/contract.pdf",
                  });
                }}
              >
                {" "}
                Dumpster Rental Contract
              </Element.Buttons.Button>
            </Layout.Flex>
          </Layout.Grid>
          <Editable.ImageDisplay
            layoutConfig={{
              mobile: 50,
              desktop: 25,
              tablet: 33,
            }}
            imageConfig={{
              items: store.defaultState.content.home.dumpsterRentalImages,
              itemSpacing: "0",
              dimensionsConfig: {
                width: "10em",
              },
            }}
          ></Editable.ImageDisplay>
        </Layout.Flex>
      </Layout.WindoW>
      <Layout.WindoW xAlign="center" yAlign="center" column>
        <Layout.Flex
          id="deliveries"
          margin="2em 0"
          column
          yAlign="center"
          xAlign="center"
        >
          <Typography.Typography
            color="textQuinary"
            variant="h3"
            textAlign="center"
            margin="0 0 1em"
          >
            Deliveries
          </Typography.Typography>{" "}
          <Layout.Grid
            gridGap="1.5em"
            centerMobile
            margin="1em 0 3.5em"
            layout={[50, 50]}
          >
            <Content.Image
              boxShadow={true}
              maxWidth="20em"
              width="100%"
              src="/assets/images/dump.jpg"
            ></Content.Image>
            <Typography.Typography
              color="textQuinary"
              variant="p"
              displayAlign={{ alignSelf: "center", justifySelf: "center" }}
              textAlign="left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography.Typography>
          </Layout.Grid>
          <Editable.ImageDisplay
            layoutConfig={{
              mobile: 50,
              desktop: 25,
              tablet: 33,
            }}
            imageConfig={{
              items: store.defaultState.content.home.deliveryImages,
              itemSpacing: "0",
              dimensionsConfig: {
                width: "10em",
              },
            }}
          ></Editable.ImageDisplay>
        </Layout.Flex>
      </Layout.WindoW>
      <Layout.WindoW
        xAlign="center"
        yAlign="center"
        column
        background="backgroundSecondary"
      >
        <Layout.Flex
          id="tractor"
          margin="2em 0"
          column
          yAlign="center"
          xAlign="center"
        >
          <Typography.Typography
            color="textTertiary"
            variant="h3"
            textAlign="center"
            margin="0 0 1em"
          >
            Tractor Services
          </Typography.Typography>{" "}
          <Layout.Grid
            gridGap="1.5em"
            centerMobile
            margin="1em 0 3.5em"
            layout={[50, 50]}
          >
            <Content.Image
              boxShadow={true}
              maxWidth="20em"
              width="100%"
              src="/assets/images/tractor10.jpg"
            ></Content.Image>
            <Typography.Typography
              color="textTertiary"
              variant="p"
              displayAlign={{ alignSelf: "center", justifySelf: "center" }}
              textAlign="left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography.Typography>
          </Layout.Grid>
          <Editable.ImageDisplay
            layoutConfig={{
              mobile: 50,
              desktop: 25,
              tablet: 33,
            }}
            imageConfig={{
              items: store.defaultState.content.home.tractorServicesImages,
              itemSpacing: "0",
              dimensionsConfig: {
                width: "10em",
              },
            }}
          ></Editable.ImageDisplay>
        </Layout.Flex>
      </Layout.WindoW>
      <Layout.WindoW xAlign="center" yAlign="center" column>
        <Layout.Flex
          id="forest"
          margin="2em 0"
          column
          yAlign="center"
          xAlign="center"
        >
          <Typography.Typography
            color="textQuinary"
            variant="h3"
            textAlign="center"
            margin="0 0 1em"
          >
            Forest Maintenance
          </Typography.Typography>{" "}
          <Layout.Grid
            gridGap="1.5em"
            centerMobile
            margin="1em 0 3.5em"
            layout={[50, 50]}
          >
            <Content.Image
              boxShadow={true}
              maxWidth="20em"
              width="100%"
              src="/assets/images/forest2.jpg"
            ></Content.Image>
            <Typography.Typography
              color="textQuinary"
              variant="p"
              displayAlign={{ alignSelf: "center", justifySelf: "center" }}
              textAlign="left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography.Typography>
          </Layout.Grid>
          <Editable.ImageDisplay
            layoutConfig={{
              mobile: 50,
              desktop: 25,
              tablet: 33,
            }}
            imageConfig={{
              items: store.defaultState.content.home.forestMaintenanceImages,
              itemSpacing: "0",
              dimensionsConfig: {
                width: "10em",
              },
            }}
          ></Editable.ImageDisplay>
        </Layout.Flex>
      </Layout.WindoW>
      <Layout.WindoW
        xAlign="center"
        yAlign="center"
        column
        background="backgroundSecondary"
      >
        <Layout.Flex
          id="lawn"
          margin="2em 0"
          column
          yAlign="center"
          xAlign="center"
        >
          <Typography.Typography
            color="textTertiary"
            variant="h3"
            textAlign="center"
            margin="0 0 1em"
          >
            Lawn and Garden
          </Typography.Typography>{" "}
          <Layout.Grid
            gridGap="1.5em"
            centerMobile
            margin="1em 0 3.5em"
            layout={[50, 50]}
          >
            <Content.Image
              boxShadow={true}
              maxWidth="20em"
              width="100%"
              src="/assets/images/brush2.jpg"
            ></Content.Image>
            <Typography.Typography
              color="textTertiary"
              variant="p"
              displayAlign={{ alignSelf: "center", justifySelf: "center" }}
              textAlign="left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography.Typography>
          </Layout.Grid>
          <Editable.ImageDisplay
            layoutConfig={{
              mobile: 50,
              desktop: 25,
              tablet: 33,
            }}
            imageConfig={{
              items: store.defaultState.content.home.lawnAndGardenImages,
              itemSpacing: "0",
              dimensionsConfig: {
                width: "10em",
              },
            }}
          ></Editable.ImageDisplay>
        </Layout.Flex>
      </Layout.WindoW>
      <Layout.WindoW xAlign="center" yAlign="center" column>
        <Layout.Flex
          id="leaf"
          margin="2em 0"
          column
          yAlign="center"
          xAlign="center"
        >
          <Typography.Typography
            color="textQuinary"
            variant="h3"
            textAlign="center"
            margin="0 0 1em"
          >
            Leaf Removal
          </Typography.Typography>{" "}
          <Layout.Grid
            gridGap="1.5em"
            centerMobile
            margin="1em 0 3.5em"
            layout={[50, 50]}
          >
            <Content.Image
              boxShadow={true}
              maxWidth="20em"
              width="100%"
              src="/assets/images/leaf6.jpg"
            ></Content.Image>
            <Typography.Typography
              color="textQuinary"
              variant="p"
              displayAlign={{ alignSelf: "center", justifySelf: "center" }}
              textAlign="left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography.Typography>
          </Layout.Grid>
          <Editable.ImageDisplay
            layoutConfig={{
              mobile: 50,
              desktop: 25,
              tablet: 33,
            }}
            imageConfig={{
              items: store.defaultState.content.home.leafRemovalImages,
              itemSpacing: "0",
              dimensionsConfig: {
                width: "10em",
              },
            }}
          ></Editable.ImageDisplay>
        </Layout.Flex>
      </Layout.WindoW>

      {/*       
          <Typography.List
            margin="1em 0 0"
            listItemConfig={{
              typographyConfig: {
                color: "textTertiary",
                variant: "p",
                textAlign: "left",
              },
            }}
            items={[
              "We gladly accept Cash and most major Credit Cards (Visa, Mastercard and American Express).",

              "Our restaurant is not intended for large groups. The majority of our tables can accommodate only up to 4 people. Tables cannot be combined and split parties will likely not be seated adjacent to one another.        ",
              "Our restaurant is generally not the best environment for young children. We welcome families, but we ask parents to keep children at the table and calm vocal infants or youngsters outside of the main dining room and patio area. We do not offer child seating nor do we allow strollers/infant carriers in the main dining room or patio area.        ",
              "While we consider special requests, modifications are not always possible as they can impact the focus of the kitchen and the integrity of many dishes.        ",
              "Please notify us of any allergies as the ingredients listed on the menu are abbreviated.        ",
              "To minimize distractions to other guests, please take cell phone conversations out of seated areas, set devices to silent, and limit the use of laptops or tablets.        ",
              "Out of consideration for other guests who are waiting, we may ask for your table if a significant amount of time has passed. We typically never make this request short of 90 minutes after you are seated.      ",
            ]}
          ></Typography.List> */}
    </React.Fragment>
  );
};

export default observer(Home);
