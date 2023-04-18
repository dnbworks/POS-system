import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, InArray } from "../../../utils/utilHelpers";

const initialState = {
	cartItems: getLocalStorage(),
	amount: 0,
	cartSubTotal: 0,
	cartTax: 0,
	cartTotal: 0,
	edit: false
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add_to_cart: (state, action) => {
			console.log(action.payload);

			if (!InArray(action.payload.id, state.cartItems)) {
					const item = {...action.payload.item, discount: "0.00", qty: action.payload.quantity, totalDisc: "0.00", total: 0 }
					const price = item.price * item.qty;
					item.total = price;
					state.cartItems = [...state.cartItems, item];
			}

			// // TODO update discount according to cash entity
			// let tempCart = state.cart.map((cartItem) => {
			// 		if (cartItem.id === action.payload.product.id) {
			// 				const qty = cartItem.qty + action.payload.quantity;
			// 				const itemTotal = (qty * cartItem.price).toFixed(2);
			// 				const TotalDiscount = (parseFloat(String(cartItem.discount)) * qty).toFixed(2);
			// 				const total = (parseFloat(itemTotal) - parseFloat(TotalDiscount)).toFixed(2);
			// 				return { ...cartItem, qty, total, totalDisc: TotalDiscount }
			// 		}
			// 		return cartItem
			// })
			// return { ...state, cart: tempCart }
		},
		clearCart: (state, action) => { 
			state.cartItems = [];
		},
		editQty: (state, action) => {
			
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
		},
		get_totals: (state, action) => {
				let { cartSubTotal, amount } = state.cartItems.reduce((cartTotal, cartItem) => {
				const { total, count } = cartItem
				cartTotal.cartSubTotal += parseFloat(total)
				cartTotal.amount += count
				return cartTotal
		},
				{
						cartSubTotal: 0,
						amount: 0,
				}
		)
		cartSubTotal = parseFloat(cartSubTotal).toFixed(2);
			const cartTax = parseFloat(cartSubTotal * 0.1).toFixed(2);
			const cartTotal = (parseFloat(cartSubTotal) + parseFloat(cartTax)).toFixed(2);
			console.log(typeof (cartSubTotal));
			state.cartSubTotal = cartSubTotal;
			state.cartTax = cartTax;
			state.cartTotal = cartTotal;
		}
	}
	});




export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartSubTotal = (state) => state.cart.cartSubTotal;
export const selectCartTax = (state) => state.cart.cartTax;
export const selectCartTotal = (state) => state.cart.cartTotal;
export const selectEdit = (state) => state.cart.edit;

export const { add_to_cart, clearCart, editQty, removeItem, get_totals } = cartSlice.actions;

export default cartSlice.reducer;