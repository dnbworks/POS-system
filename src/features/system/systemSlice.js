import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpenSelectedModal: false
}

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		
	}
});



export default systemSlice.reducer;