import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const endpoints = {
	post_url: 'http://localhost:3004/products',
	category_url: 'http://localhost:3004/category'
}

const initialState = {
	products: [],
	category: [],
	status: 'idle',
	error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await axios.get(url);
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
				state.products = state.products.concat(action.payload);
			})
			addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})

	}
});

export const selectAllProducts = (state) => state.products;
export const selectAllCategories = (state) => state.category;
export const selectstatus = (state) => state.status;

export const {  } = productSlice.actions;

export default productSlice.reducer;