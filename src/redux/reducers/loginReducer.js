import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postApiWithoutToken } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    development: 'http://localhost:8000',
    isLoading: false,
    error: '',
    user: []
}

export const loginFun = createAsyncThunk(
    'login/vendor',
    async (bodydata) => {
        const data = await postApiWithoutToken(`${initialState.development}/auth`, bodydata)
        return data
    }
)
const registerSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        [loginFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                message.success("OTP sent succesfully..!")
                state.isLoading = false
                state.error = ''
                state.isLoading = false
            } if (payload.status == 500) {
                message.error(payload?.message??'', + '! ', '  ' + payload?.message ??'',  + '!')
                state.isLoading = false
                state.error = payload?.error;
            } else {
                message.error(payload.error??'', '!')
                state.isLoading = false
                state.error = payload?.error;
            }
        },
        [loginFun.pending]: (state, { payload }) => {
            state.isLoading = true
            state.error = ''
        },
    }
})

export const { incrementStaper, decrementStaper, registerDetails, addBankDetails, addPickupLocation } = registerSlice.actions

export default registerSlice.reducer