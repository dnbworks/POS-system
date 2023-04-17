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
}

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		openModal(state, action) {
			state.selectedItem = action.payload;
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
			if (action.payload.type === "qty") {
					const item = state.cart.find((item) => item.id === action.payload.type)
					return { ...state, isOpenSelectedModal: true, selectedItem: item, edit: true }
			}
			if (action.payload.type === "discount") {
					const item = state.cart.find(item => item.id === action.payload.type)
					return { ...state, discountModal: true, selectedItem: item, edit: true }
			}
			console.log(action.payload);
		},
		closeModal(state, action) {
			if (action.payload === "customer") {
				return { ...state, isSearchModalOpen: false }
			}
			if (action.payload === "item") {
					state.isOpenSelectedModal = false;
					state.selectedItem = {};
			}
			if (action.payload == "discount") {
					return { ...state, discountModal: false, selectedItem: undefined }
			}
		},
		changeDisplay(state, action) {

		},

	}
});

export const { openModal, closeModal, changeDisplay } = systemSlice.actions;


export default systemSlice.reducer;