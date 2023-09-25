import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsGrid: true,
}

const visualSlice = createSlice({
    name: 'visual',
    initialState,
    reducers: {
        setItemsGrid(state, action){
            state.itemsGrid = action.payload;
        }
    },

})


export const {
    setItemsGrid
  } = visualSlice.actions;
export const visualReducer = visualSlice.reducer;
