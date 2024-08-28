export type Machine = {
  _id: string;
  types: CoffeeType[];
  sizes: CoffeeSize[];
  extras: CoffeeExtra[];
};

export type CoffeeType = {
  _id: string;
  name: string;
  sizes: string[];
  extras: string[];
};

export type CoffeeSize = {
  _id: string;
  name: string;
};

export type CoffeeExtra = {
  _id: string;
  name: string;
  subselections: CoffeeSubSelection[];
};

export type CoffeeSubSelection = {
  _id: string;
  name: string;
};
