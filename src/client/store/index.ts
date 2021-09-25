import { makeAutoObservable } from "mobx";
import Util from "../util";

export interface DefaultState {}

export interface Request {
  type: "GET" | "POST" | "PATCH" | "DELETE" | string;
}

const noAction = {
  type: "",
};

const defaultStateHandler = ({
  action,
  currentDefaultState,
}: {
  action: Request;
  currentDefaultState: DefaultState;
}) => {
  return currentDefaultState;
};

// const requestHandler: Request = {};

class Store {
  defaultState: DefaultState = {
    content: {
      home: {
        images: {
          backgroundImage: "/assets/images/services.jpeg",
        },
        dumpsterRentalImages: [
          {
            src: "/assets/images/dump.jpg",
          },

          {
            src: "/assets/images/dump2.jpg",
          },
          {
            src: "/assets/images/dump3.jpg",
          },
          {
            src: "/assets/images/dump4.jpg",
          },
          {
            src: "/assets/images/dump5.jpg",
          },
          {
            src: "/assets/images/dump6.jpg",
          },
          {
            src: "/assets/images/dump7.jpg",
          },
          {
            src: "/assets/images/dump8.jpg",
          },
          {
            src: "/assets/images/dump9.jpg",
          },
          {
            src: "/assets/images/dump10.jpg",
          },
          {
            src: "/assets/images/dump11.jpg",
          },
        ],
        deliveryImages: [
          {
            src: "/assets/images/delivery1.jpg",
          },

          {
            src: "/assets/images/rocks.jpg",
          },
          {
            src: "/assets/images/rocks2.jpg",
          },
          {
            src: "/assets/images/rocks3.jpg",
          },
        ],
        tractorServicesImages: [
          {
            src: "/assets/images/snow1.jpg",
          },

          {
            src: "/assets/images/snow2.jpg",
          },
          {
            src: "/assets/images/snow3.jpg",
          },
          {
            src: "/assets/images/snow4.jpg",
          },
          {
            src: "/assets/images/tractor1.jpg",
          },
          {
            src: "/assets/images/tractor2.jpg",
          },
          {
            src: "/assets/images/tractor3.jpg",
          },
          {
            src: "/assets/images/tractor4.jpg",
          },
          {
            src: "/assets/images/tractor5.jpg",
          },
          {
            src: "/assets/images/tractor6.jpg",
          },
          
          {
            src: "/assets/images/tractor8.jpg",
          },
          {
            src: "/assets/images/tractor9.jpg",
          },
          {
            src: "/assets/images/tractor10.jpg",
          },
        ],
        forestMaintenanceImages: [
          {
            src: "/assets/images/forest1.jpg",
          },

          {
            src: "/assets/images/forest2.jpg",
          },
          {
            src: "/assets/images/forest3.jpg",
          },
          {
            src: "/assets/images/forest4.jpg",
          },
          {
            src: "/assets/images/forest5.jpg",
          },
        ],
        lawnAndGardenImages: [
          {
            src: "/assets/images/brush.jpg",
          },

          {
            src: "/assets/images/brush2.jpg",
          },
        ],
        leafRemovalImages: [
          {
            src: "/assets/images/leaf1.jpg",
          },

          {
            src: "/assets/images/leaf2.jpg",
          },
          {
            src: "/assets/images/leaf3.jpg",
          },
          {
            src: "/assets/images/leaf4.jpg",
          },
          {
            src: "/assets/images/leaf5.jpg",
          },
          {
            src: "/assets/images/leaf6.jpg",
          },
        ],
      },
    },
  };
  action: Request = noAction;
  window = {
    scrollY: 0,
    lastScrollY: 0,
    clientWidth: global?.window?.innerWidth || 0,
  };
  user = { roles: [""] };
  content = {};

  constructor() {
    makeAutoObservable(this);
  }

  defaultStateHandler() {
    this.defaultState = defaultStateHandler({
      action: this.action,
      currentDefaultState: this.defaultState,
    });

    this.action = { type: "" };
  }
  defaultScrollHandler({ scrollY, lastScrollY }) {
    this.window = { ...this.window, lastScrollY: lastScrollY, scrollY };
  }

  async defaultContentHandler({ content, action, accessor, page }) {
    try {
      if (action === "GET") {
      } else if (action === "SET") {
        await Util.Request({
          method: "POST",
          url: "/api/content",
          data: { items: content, page, accessor },
        });
        this.content = content;
      } else if (action === "INITIAL") {
        this.content = content.content;
      }
    } catch (err) {
      console.error(err);
    }
  }
}

const store = new Store();

export default store;
