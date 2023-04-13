import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/home/cart/cartSlice";
import systemReducer from "../features/system/systemSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        system: systemReducer
    }
})