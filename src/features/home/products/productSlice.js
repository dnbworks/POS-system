import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const endpoints = {
	post_url: 'http://localhost:3004/products',
	category_url: 'http://localhost:3004/category'
}

const initialState = {
	productItems: [],
	category: [],
	status: 'idle',
	error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await axios.get(endpoints.post_url);
		return [...response.data];
	} catch (e) {
		console.log(e.response);
	}
});
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
	try {
		const response = await axios.get(endpoints.category_url);
		return [...response.data];
	} catch (e) {
		console.log(e.response);
	}
});

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
	
	},
	extraReducers(builder){
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.productItems = state.productItems.concat(action.payload);
				// console.log(state.productItems);
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});

			builder
			.addCase(fetchCategories.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.category = state.category.concat(action.payload);
				// console.log(state.productItems);
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});

	}
});

export const selectAllProducts = (state) => state.products.productItems;
export const selectAllCategories = (state) => state.products.category;
export const selectStatus = (state) => state.products.status;

export const {  } = productSlice.actions;

export default productSlice.reducer;