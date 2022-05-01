import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  count: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items[item.id] = {
        itemCount: state.items[item.id]?.itemCount + 1 || 1,
        ...item,
      };
      state.count += 1;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
