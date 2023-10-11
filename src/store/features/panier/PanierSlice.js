import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }

      // Update the total price and item count
      state.total += newItem.price;
      state.itemCount += 1;
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload; // The ID of the item being removed
      const itemToRemove = state.items.find(
        (item) => item.id === itemIdToRemove
      );

      if (itemToRemove) {
        // Decrease the item's quantity and update the total price and item count
        
          // Remove the item completely if the quantity is 1
          state.items = state.items.filter(
            (item) => item.id !== itemIdToRemove
          );
       
      

        state.total -= itemToRemove.price*itemToRemove.quantity;
        state.itemCount -= itemToRemove.quantity;
      }
    },
    clearCart: (state) => {
      // Reset the cart to its initial state
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
    setIncrement: (state, action) => {
      const itemIdToIncrement = action.payload; // The ID of the item to increment
      const itemToIncrement = state.items.find(
        (item) => item.id === itemIdToIncrement
      );

      if (itemToIncrement) {
        // Increment the item's quantity and update the total price
        itemToIncrement.quantity += 1;
        state.total += itemToIncrement.price;
        state.itemCount += 1;
      }
    },
    setDecrement: (state, action) => {
      const itemIdToDecrement = action.payload; // The ID of the item to decrement
      const itemToDecrement = state.items.find(
        (item) => item.id === itemIdToDecrement
      );

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        // Decrement the item's quantity (if greater than 1) and update the total price
        itemToDecrement.quantity -= 1;
        state.total -= itemToDecrement.price;
        state.itemCount -= 1;
      }
    },
  },
});

export const {setIncrement,setDecrement,addItemToCart, removeItemFromCart, clearCart } =
  panierSlice.actions;
export default panierSlice.reducer;
