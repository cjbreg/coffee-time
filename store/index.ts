import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { machineApi } from "../services/machine";
import coffeeReducer from "./reducers/coffeeReducer";
import coffeeMachine from "./coffeeMachine";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [machineApi.reducerPath]: machineApi.reducer,
  coffee: coffeeReducer,
  coffeeMachine: coffeeMachine,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(machineApi.middleware),
});

setupListeners(store.dispatch);
