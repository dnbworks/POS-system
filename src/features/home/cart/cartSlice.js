import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, InArray } from "../../../utils/utilHelpers";

const initialState = {
	cart: getLocalStorage(),
	amount: 0,
	cartSubTotal: 0,
	cartTax: 0,
	cartTotal: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add_to_cart: (state, action) => {
			const tempProducts = [...state.storeProducts];
			const index = state.storeProducts.indexOf(action.payload.product);
			const product = tempProducts[index];

			if (!InArray(action.payload.product.id, state.cart)) {
					const item = { id: product.id, name: product.name, price: product.price, qty: action.payload.quantity, discount: "0.00", totalDisc: "0.00", total: 0 }
					const price = item.price * item.qty;
					item.total = price;
					return { ...state, cart: [...state.cart, item], isOpenSelectedModal: false }
			}

			// TODO update discount according to cash entity
			let tempCart = state.cart.map((cartItem) => {
					if (cartItem.id === action.payload.product.id) {
							const qty = cartItem.qty + action.payload.quantity;
							const itemTotal = (qty * cartItem.price).toFixed(2);
							const TotalDiscount = (parseFloat(String(cartItem.discount)) * qty).toFixed(2);
							const total = (parseFloat(itemTotal) - parseFloat(TotalDiscount)).toFixed(2);
							return { ...cartItem, qty, total, totalDisc: TotalDiscount }
					}
					return cartItem
			})
			return { ...state, cart: tempCart, isOpenSelectedModal: false }
		},
		clearCart: () => { 

		}
	}
});

export const cartItems = (state) => state.cart;
export const selectCartSubTotal = (state) => state.cartSubTotal;
export const selectCartTax = (state) => state.cartTax;
export const selectCartTotal = (state) => state.cartTotal;

export const { add_to_cart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;