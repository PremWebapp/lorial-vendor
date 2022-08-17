import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postWithImageItems } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    development: 'http://localhost:8000',
    isLoading: false,
    productList: []
}

export const addProductFun = createAsyncThunk(
    'product/vendor',
    async ({ data, token }) => {
        console.log('i am adding product ' + data)
        const result = await postWithImageItems(`${initialState.development}/add-product`, data, token, 'post')
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
    }
})

export default registerSlice.reducer