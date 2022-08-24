import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getItems, postWithImageItems } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    development: 'http://localhost:8000',
    verndorCategory: []
}

export const categoryFun = createAsyncThunk(
    'category/vendor',
    async ({ data, token }) => {
        const result = await postWithImageItems(`${initialState.development}/category`, data, token, 'post')
        return result
    }
)

export const categoryFunById = createAsyncThunk(
    'categoryById/vendor',
    async ({ data, token }) => {
        const result = await getItems(`${initialState.development}/category?vendor_id=${data}`, token)
        return result
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: {
        [categoryFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) message.success("Data submitted successfully..!")
            else message.error(payload.error)
        },
        [categoryFun.pending]: (state, { payload }) => {
        },
        [categoryFunById.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) state.verndorCategory = payload.data
            else message.error(payload.error)
        },
        [categoryFunById.pending]: (state, { payload }) => {
            state.verndorCategory = []
        },
    }
})

export default categorySlice.reducer