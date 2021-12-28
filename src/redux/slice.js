import { createSlice } from "@reduxjs/toolkit";

const juiceSlice = createSlice({
  name: "juice",
  initialState: {
    allJuice: [],
    cart: [],
  },
  reducers: {
    setAllJuice: (state, action) => {
      state.allJuice = [...action.payload];
    },
      setCart: (state, action) => {
      const existItem = state.cart.find(
        (item) => item.idDrink === action.payload.idDrink
      );

      if (existItem) {
        existItem.quantity += 1;
        const remainingItems = state.cart.filter(
          (item) => item.idDrink != action.payload.idDrink
          );
          state.cart = [...remainingItems, existItem];
      } else {
          state.cart = [...state.cart, action.payload];
      }
      },
      orderConfirm: (state, action) => {
          state.cart = action.payload;
      }
  },
});

export const { setAllJuice, setCart, orderConfirm } = juiceSlice.actions;

export default juiceSlice.reducer;
