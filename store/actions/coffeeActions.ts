import { CoffeeExtra, CoffeeSize, CoffeeType } from "@/services/types";
import { createAction } from "@reduxjs/toolkit";

export const selectCoffeeType = createAction<CoffeeType>("SELECT_COFFEE_TYPE");
export const selectCoffeeSize = createAction<CoffeeSize>("SELECT_COFFEE_SIZE");
export const selectCoffeeExtra = createAction<CoffeeExtra>(
  "SELECT_COFFEE_EXTRA",
);
