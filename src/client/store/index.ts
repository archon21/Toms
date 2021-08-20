import { makeAutoObservable } from "mobx";

const defaultMenu = {
  starters: {
    name: "Starters",
    description: "",
    items: [
      {
        name: "Shrimp Cocktail",
        price: 400,
        description: "colossal shrimp with five spice cocktail sauce",
        unit: "ea",
        includes: [],
        info: [],
      },
      {
        name: "Candied Bacon",
        price: 1000,
        description: "slab bacon three ways with pickles and bbq",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Lobster Johnny Cake",
        price: 1900,
        description: "with brown butter and crème fraiche",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "the Crab",
        price: 1300,
        description: "cake  butter and dill remoulade with fresh greens",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "French Onion Dip",
        price: 1100,
        description: "with house made kettle chips",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Tuna Nachos*",
        price: 1600,
        description: "créme fraiche with basil and sesame on wonton crisps",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Savitsky Corn Chowder",
        price: 1300,
        description: "with jumbo lump crab meat",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Spring Greens Salad",
        price: 900,
        description: "fresh greens with goat cheese and pickled carrot ribbons",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Caesar Salad",
        price: 1000,
        description:
          "baby romaine and roasted garlic and croutons with parmigiana reggiano",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "the Colchester Salad",
        price: 1800,
        description: "lobster with mesclun, walnuts, pear, blue cheese, lemon",
        unit: "",
        includes: [],
        info: [],
      },
    ],
  },

  mains: {
    name: "Mains",
    description: "",
    items: [
      {
        name: "Crispy Chicken Sandwich",
        price: 1600,
        description: "baby kale-slaw, tomato, and a sesame bun",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Cast Iron Steak*",
        price: 4100,
        description: "butter basted USDA Prime filet with béarnaise",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Rigatoni Bolognese",
        price: 2400,
        description: "sausage and braised local beef",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "the Burger*",
        price: 1700,
        description:
          "local ground beef and cheese, kale-slaw, tomato, and a sesame bun",
        unit: "",
        includes: [],
        add: [
          {
            name: "Smoked Bacon",
            price: 400,
          },
        ],
        info: [],
      },
      {
        name: "Tuna Provençal*",
        price: 3800,
        description: "tomato, caper, and olive relish with aioli",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Sunset Salmon*",
        price: 3100,
        description: "citrus and charred tomato fondue with capellini",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Seafood Risotto",
        price: 3400,
        description: "diver scallops and shrimp over riso cacio e pepe",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Lobster Roll",
        price: "MP",
        description:
          "a 1 ¼  pound lobster served hot or cold on buttered rolls",
        unit: "",
        includes: [],
        info: [],
      },
    ],
  },
  sides: {
    name: "Sides",
    description: "",
    items: [
      {
        name: "Shoestring Fries",
        price: 700,
        description: "",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Johnny Cakes",
        price: 600,
        description: "",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Baked Mac & Cheese",
        price: 1100,
        description: "",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Garlic Asparagus",
        price: 1100,
        description: "",
        unit: "",
        includes: [],
        info: [],
      },
    ],
  },
};

const drinkMenu = {
  cocktails: {
    name: "Cocktails",
    description: "",
    items: [
      {
        name: "It’s One Banana, Michael",
        price: 1000,
        description: "what could it cost?",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Life is Good",
        price: 900,
        description: "raspberry stoli, 7up, pavan, cran",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "the Midnight Vespers",
        price: 1400,
        description: "empress, ketel, lillet, orange bitters",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "1944 Mai Tai ",
        price: 1100,
        description: "2 rums, orgeat, lime, curacao, Donn’s mix",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Classic Margarita",
        price: 1000,
        description: "espolon, lime, triple sec",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Espresso Martini",
        price: 1100,
        description: "vodka, vanilla, esspresso",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "Toasted Almond Piña",
        price: 1200,
        description: "appleton 12yr, orgeat, pineapple, coconut",
        unit: "",
        includes: [],
        info: [],
      },
      {
        name: "the Last Word",
        price: 1200,
        description: "gin, chartreuse, maraschino, lime",
        unit: "",
        includes: [],
        info: [],
      },
    ],
  },
};

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
          backgroundImage: "/assets/images/lobster.jpeg",
        },
      },
      menu: {
        menu: defaultMenu,
        drinks: drinkMenu,
      },
      gallery: {
        images: [
          {
            src: "/assets/images/plate1.jpeg",
          },
          {
            src: "/assets/images/bar.jpeg",
          },
          {
            src: "/assets/images/plate2.jpeg",
          },
          {
            src: "/assets/images/building.jpeg",
          },
          {
            src: "/assets/images/lobster.jpeg",
          },
          {
            src: "/assets/images/dining.jpeg",
          },
          {
            src: "/assets/images/mike.jpeg",
          },
          {
            src: "/assets/images/family.jpeg",
          },
          {
            src: "/assets/images/plate3.jpeg",
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
}

const store = new Store();

export default store;
