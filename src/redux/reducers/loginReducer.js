import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postApiWithoutToken } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    development: 'http://localhost:8000',
    isLoading: false,
    user: {},
    token: null,
}

export const loginFun = createAsyncThunk(
    'login/vendor',
    async (bodydata) => {
        const data = await postApiWithoutToken(`${initialState.development}/auth`, bodydata)
        return data
    }
)

export const otpValidateFun = createAsyncThunk(
    'otp/vendor',
    async (bodydata) => {
        const data = await postApiWithoutToken(`${initialState.development}/auth/login`, bodydata)
        return data
    }
)

export const logoutFun = createAsyncThunk(
    'logout/vendor',
    async (bodydata) => {
        const data = await postApiWithoutToken(`${initialState.development}/auth/logout`, bodydata)
        return data
    }
)

const registerSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {
        [loginFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                message.success("OTP sent succesfully..!")
                state.isLoading = false
            } if (payload.status == 500) {
                payload.error && message.error(payload.error ?? '', '!')
                payload.message && message.error(payload.message ?? '', '!')
                state.isLoading = false
            } else {
                payload.error && message.error(payload.error ?? '', '!')
                payload.message && message.error(payload.message ?? '', '!')
                state.isLoading = false
            }
        },
        [loginFun.pending]: (state, { payload }) => {
            state.isLoading = true
        },

        // otp validate function
        [otpValidateFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                console.log('state', state)
                state.token = payload.token
                state.user = payload?.data
                message.success("Logged In succesfully..!")
                return
            } if (payload.status == 500) {
                state.token = null
                state.user = null
                payload.error && message.error(payload.error ?? '', '!')
                payload.message && message.error(payload.message ?? '', '!')
            } else {
                state.token = null
                state.user = null
                payload.error && message.error(payload.error ?? '', '!')
                payload.message && message.error(payload.message ?? '', '!')
            }
        },
        [otpValidateFun.pending]: (state, { payload }) => {
            state.token = null
            state.user = null
        },

        // logout
        [logoutFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                console.log('state', state)
                state.token = null
                state.user = {}
                message.success("Logout succesfully..!")
                return
            } if (payload.status == 500) {
                payload.error && message.error(payload.error ?? '', '!')
                payload.message && message.error(payload.message ?? '', '!')
            } else {
                payload.error && message.error(payload.error ?? '', '!')
                payload.message && message.error(payload.message ?? '', '!')
            }
        },
        [logoutFun.pending]: (state, { payload }) => {
        },
    }
})

export default registerSlice.reducer