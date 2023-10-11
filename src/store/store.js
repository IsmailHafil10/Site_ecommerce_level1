import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import PanierSlice from "./features/panier/PanierSlice";
import userSlice from "./features/User/userSlice";
import blogSlice from "./features/blog/blogSlice";
import authSlice from "./features/User/authSlice";



const store=configureStore({
    reducer:{
        auth:authSlice,
        cart: PanierSlice,
        product: productSlice,
        user: userSlice,
        blog:blogSlice
    }
})
export default store;