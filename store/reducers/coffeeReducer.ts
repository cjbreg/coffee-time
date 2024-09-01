import { CoffeeExtra, CoffeeSize, CoffeeType } from "@/services/types";
import {
  selectCoffeeExtra,
  selectCoffeeSize,
  selectCoffeeType,
} from "../actions/coffeeActions";
import { createReducer } from "@reduxjs/toolkit";

interface CoffeeReducerState {
  selectedType: null | CoffeeType;
  selectedSize: null | CoffeeSize;
  selectedExtra: null | CoffeeExtra;
}

const initialState: CoffeeReducerState = {
  selectedType: null,
  selectedSize: null,
  selectedExtra: null,
};

const coffeeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCoffeeType, (state, action) => {
      state.selectedType = action.payload;
    })
    .addCase(selectCoffeeSize, (state, action) => {
      state.selectedSize = action.payload;
    })
    .addCase(selectCoffeeExtra, (state, action) => {
      state.selectedExtra = action.payload;
    });
});

export default coffeeReducer;
