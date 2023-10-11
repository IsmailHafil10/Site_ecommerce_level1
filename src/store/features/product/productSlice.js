import { createSlice} from "@reduxjs/toolkit";
import { destroyProduct, getAllProducts, putProduct, storeProduct } from "./productActions";


const initialState = {
  errorMessage: "",
  isLoading: false,
  showGrid: false,
  product: { id: 0, title: "", price: 0 },
  products: [
    { id: 1, title: "Iphone 15 pro max", price: 300 },
    { id: 2, title: "Sumsung S21", price: 300 },
    { id: 3, title: "vivo", price: 300 },
    { id: 4, title: "Huawei", price: 300 },
    { id: 5, title: "Oppo", price: 300 },
  ],
  edit: false,
};



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {//statique
    setShowGrid: (state) => {
      state.showGrid = !state.showGrid;
    },
    editProduct: (state, action) => {
      state.edit = true;
      state.product = action.payload;
    },
    persistProduct: (state, action) => {
      state.products.unshift(action.payload);
      state.product = {
        id: 0,
        title: "",
        price: 0,
      };
    },
    updateProduct: (state, action) => {
      let item = { ...action.payload, id: state.product.id };
      state.products = state.products.map((product) =>
        product.id === item.id ? item : product
      );
      state.edit = false;
      state.product = {
        id: 0,
        title: "",
        price: 0,
      };
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    setProduct: (state, { payload: { name, value } }) => {
      state.product[name] = value;
    },
  },

  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    [storeProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [storeProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products.unshift(action.payload);
      state.product = {
        id: 0,
        title: "",
        price: 0,
      };
    },

    [storeProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    [putProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [putProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.products = state.products.map((product) =>
        product.id === payload.id ? payload : product
      );
      state.edit = false;
      state.product = {
        id: 0,
        title: "",
        price: 0,
      };
    },

    [putProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    [destroyProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [destroyProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.product = {
        id: 0,
        title: "",
        price: 0,
      };
    },

    [destroyProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});
export const {
  persistProduct,
  setShowGrid,
  updateProduct,
  deleteProduct,
  editProduct,
  setProduct,
} = productSlice.actions;

export default productSlice.reducer;
