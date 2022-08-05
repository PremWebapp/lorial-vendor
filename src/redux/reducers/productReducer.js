import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetItems } from './heplers/fetch2';

const initialState = {
    items: [],
    filteredItems: [],
    errors: '',
    isLoading: false,
}
export const fetchProductItems = createAsyncThunk(
    'product/fetchProductData',
    async (thunkAPI) => {
        const data = await fetchGetItems('https://fakestoreapi.com/products', 'get')
        return data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterProductByRating: (state, { payload }) => {
            if (payload.length) state.filteredItems = state.items.filter(val => val.rating.rate >= Math.min(...payload))
            else state.filteredItems = state.items
        },
        filterProductByPrice: (state, { payload }) => {
            const data = state.items.filter(val => (val.price <= payload[1]))
            state.filteredItems = data
        },
    },
    extraReducers: {
        [fetchProductItems.pending]: (state, { payload }) => {
            state.isLoading = true;
            state.items = []
        },
        [fetchProductItems.fulfilled]: (state, { payload }) => {
            state.items = payload
            state.filteredItems = payload
            state.isLoading = false;
        },
    }
})
export const { filterProductByRating, filterProductByPrice } = productSlice.actions
export default productSlice.reducer