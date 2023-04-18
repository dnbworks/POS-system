import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	amount: 0,
	grid: true,
	list: false,
	isOpenSelectedModal: false,
	cashOptionEntity: "amount",
	isModalOpen: false,
	isSearchModalOpen:false,
	edit: false,
	discountModal: false,
	isAddPersonModalOpen: false,
	selectedItem: null,
	isPayModalOpen: false
}

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		openModal(state, action) {
			// if (action.payload.item) {
			// 	state.selectedItem = action.payload.item;
			// }

			if (action.payload.type === "add_customer") {
			 state.isAddPersonModalOpen = true;
			}
			if (action.payload.type === "customer_search") {
				state.isSearchModalOpen = true;
			}
			if (action.payload.type === "item") {
					state.isOpenSelectedModal = true;
					state.selectedItem = action.payload.item;
			}
			// if (action.payload.type === "qty") {
			// 		const item = state.cart.find((item) => item.id === action.payload.type)
			// 		return { ...state, isOpenSelectedModal: true, selectedItem: item, edit: true }
			// }
			if (action.payload.type === "discount") {
					state.discountModal = true;
					console.log(action.payload);
			}
			if (action.payload.type === "pay") {
				state.isPayModalOpen = true;
			}
		
		},
		closeModal(state, action) {
			if (action.payload === "customer") {
					state.isSearchModalOpen = false;
					console.log("yez");
			}
			if (action.payload === "item") {
					state.isOpenSelectedModal = false;
					state.selectedItem = {};
			}
			if (action.payload == "discount") {
				state.discountModal = false;
				state.selectedItem = {};
			}
			if (action.payload === "pay") {
				state.isPayModalOpen = false;
			}
		},
		changeDisplay(state, action) {

		},

	}
});


export const selectDiscountModal = (state) => state.system.discountModal;
export const selectIsSearchModalOpen = (state) => state.system.isSearchModalOpen;
export const selectIsPayModalOpen = (state) => state.system.isPayModalOpen;
;
export const { openModal, closeModal, changeDisplay } = systemSlice.actions;


export default systemSlice.reducer;