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
      state.total += Number(item.price);
    },
    increaseItemCount: (state, action) => {
      const id = action.payload;
      state.items[id].itemCount += 1;
      state.count += 1;
      state.total += Number(state.items[id].price);
    },
    decreaseItemCount: (state, action) => {
      const id = action.payload;
      state.items[id].itemCount -= 1;
      state.count -= 1;
      state.total -= Number(state.items[id].price);
      if (state.items[id].itemCount === 0) delete state.items[id];
    },
  },
});

export const { addItem, increaseItemCount, decreaseItemCount } = cartSlice.actions;
export default cartSlice.reducer;
