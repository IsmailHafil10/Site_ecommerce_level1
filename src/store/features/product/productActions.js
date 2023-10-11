import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//createAsyncThunk : prend 2 parametres la 1 ere est le nom de slice et le 2 eme c'est le nom de la fonction
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        return data.products;
      } catch (error) {
        return error.message;
      }
    }
  );
  export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (id) => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        return data.products;
      } catch (error) {
        return error.message;
      }
    }
  );
  
  export const storeProduct = createAsyncThunk(
    "product/storeProduct",
    async (newProduct) => {
      try {
        const { data } = await axios.post(
          "https://dummyjson.com/products/add",
          newProduct
        );
        return data;
      } catch (error) {
        return error.message;
      }
    }
  );
  
  export const putProduct = createAsyncThunk(
    "product/putProduct",
    async (currentProduct) => {
      try {
        const { data } = await axios.put(
          `https://dummyjson.com/products/${currentProduct.id}`,
          currentProduct
        );
        return currentProduct;
      } catch (error) {
        return error.message;
      }
    }
  );
  
  export const destroyProduct = createAsyncThunk(
    "product/destroyProduct",
    async (id) => {
      try {
        const { data } = await axios.delete(
          `https://dummyjson.com/products/${id}`
        );
        return id;
      } catch (error) {
        return error.message;
      }
    }
  );