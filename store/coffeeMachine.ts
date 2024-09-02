import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Machine } from "../services/types";

interface MachineState {
  selectedMachine: Machine | null;
}

const initialState: MachineState = {
  selectedMachine: null,
};

const machineSlice = createSlice({
  name: "coffeeMachine",
  initialState,
  reducers: {
    selectMachine(state, action: PayloadAction<Machine>) {
      state.selectedMachine = action.payload;
    },
  },
});

export const { selectMachine } = machineSlice.actions;
export default machineSlice.reducer;
