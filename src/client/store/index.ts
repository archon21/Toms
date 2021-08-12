import { makeAutoObservable } from "mobx";

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
      dumpsterRentals: [
        { src: "/assets/images/services.jpeg", boxShadow: false },
        { src: "/assets/images/services.jpeg", boxShadow: false },
        { src: "/assets/images/services.jpeg", boxShadow: false },
        { src: "/assets/images/services.jpeg", boxShadow: false },
        { src: "/assets/images/services.jpeg", boxShadow: false },
        { src: "/assets/images/services.jpeg", boxShadow: false },
        { src: "/assets/images/services.jpeg", boxShadow: false },
      ],
    },
  };
  action: Request = noAction;

  constructor() {}

  defaultStateHandler() {
    this.defaultState = defaultStateHandler({
      action: this.action,
      currentDefaultState: this.defaultState,
    });

    this.action = { type: "" };
  }
}

const store = new Store();

export default store;
