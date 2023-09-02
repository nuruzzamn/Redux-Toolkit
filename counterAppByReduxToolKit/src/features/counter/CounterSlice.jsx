import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { count: 0 },
  reducers: {
    fIncrement: (state) => {
      state.count = state.count + 1;
    },
    fDecrement: (state) => {
      state.count = state.count - 1;
    },
    fReset: (state) => {
      state.count = 0;
    },
    fIncreaseByNumber: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

// export reducer and action createor
// Action creators are generated for each case reducer function
export const { fIncrement, fDecrement, fReset, fIncreaseByNumber } =
  counterSlice.actions;

export default counterSlice.reducer;
