import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deleteItems, getItems, postWithImageItems } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    development: 'http://localhost:8000',
    isLoading: false,
    productList: []
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
        console.log('i am..............')
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

const registerSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [addProductFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                message.success("Data submitted successfully..!")
                state.isLoading = false
            } if (payload.status == 500) {
                payload.error && message.error(payload.error ?? '', '!')
                state.isLoading = false
            } else {
                payload.error && message.error(payload.error ?? '', '!')
                state.isLoading = false
            }
        },
        [addProductFun.pending]: (state, { payload }) => {
            state.isLoading = true
        },
        // get product details
        [getProductFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.productList = payload.data
            } if (payload.status == 500) {
                payload.error && message.error(payload.error ?? '', '!')
            } else {
                payload.error && message.error(payload.error ?? '', '!')
            }
        },
        [getProductFun.pending]: (state, { payload }) => {
        },
    }
})

export default registerSlice.reducer