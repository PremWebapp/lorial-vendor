import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deleteItems, getItems, postWithImageItems } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    development: 'http://localhost:8000',
    isLoading: false,
    productList: [],
    productLisByID: []
}

export const addProductFun = createAsyncThunk(
    'add-product/vendor',
    async ({ data, token }) => {
        const result = await postWithImageItems(`${initialState.development}/product`, data, token, 'post')
        return result
    }
)

export const getProductFun = createAsyncThunk(
    'get-product/vendor',
    async ({ data, token }) => {
        const result = await getItems(`${initialState.development}/product?vendor_id=${data}`, token)
        return result
    }
)

export const removeProductFun = createAsyncThunk(
    'remove-product/vendor',
    async ({ data, token }) => {
        const result = await deleteItems(`${initialState.development}/product?product_id=${data}`, token)
        return result
    }
)

export const getProductByIDFun = createAsyncThunk(
    'byid-product/vendor',
    async ({ data, token }) => {
        const result = await getItems(`${initialState.development}/product/details?product_id=${data}`, token)
        return result
    }
)

const registerSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [addProductFun.rejected]: (state, { payload }) => {
            state.isLoading = false
            message.error('Some error occurred in server side!')
        },
        [addProductFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                message.success("Data submitted successfully..!")
                state.isLoading = false
            } else {
                state.isLoading = false
                payload.error && message.error(payload.error ?? '', '!')
            }
        },
        [addProductFun.pending]: (state, { payload }) => {
            console.log('i am pending', state.isLoading)
            state.isLoading = true
        },

        // get product details
        [getProductFun.rejected]: (state, { payload }) => {
            state.productList = []
            message.error('Some error occurred in server side!')
        },
        [getProductFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.productList = payload.data
            } else payload.error && message.error(payload.error ?? '', '!')
        },
        [getProductFun.pending]: (state, { payload }) => {
            state.productList = []
        },

        [getProductByIDFun.rejected]: (state, { payload }) => {
            state.productLisByID = []
            message.error('Some error occurred in server side!')
        },
        [getProductByIDFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.productLisByID = payload.data
            } else payload.error && message.error(payload.error ?? '', '!')
        },
        [getProductByIDFun.pending]: (state, { payload }) => {
            state.productLisByID = []
        },
    }
})

export default registerSlice.reducer