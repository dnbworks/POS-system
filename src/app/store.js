import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/home/cart/cartSlice";
import systemReducer from "../features/system/systemSlice";
import productsReducer from "../features/home/products/productSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        system: systemReducer,
        products: productsReducer
    }
})