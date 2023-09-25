import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  brand: "",
  visibleItemsAmount: 12,
  sortByName: 1,
  sortByCost: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setBrand(state, action) {
      state.brand = action.payload;
    },
  },
});

export const { setBrand, setCategory } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
