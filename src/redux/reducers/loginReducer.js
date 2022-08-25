import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postApiWithoutToken } from './heplers/fetch2';
import { message } from 'antd'


const initialState = {
    development: 'http://localhost:8000',
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
        [loginFun.rejected]: (state, { payload }) => {
            message.error('Some error occurred in server side!')
        },

        [loginFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
            } else  message.error(payload.error )
        },
        [loginFun.pending]: (state, { payload }) => {
        },
        
        // otp validate function
        [otpValidateFun.rejected]: (state, { payload }) => {
            state.token = null
            state.user = null
            message.error('Some error occurred in server side!')
        },
        [otpValidateFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.token = payload.token
                state.user = payload?.data
                message.success("Logged In succesfully..!")
                return
            } else {
                state.token = null
                state.user = null
                 message.error(payload.error )
            }
        },
        [otpValidateFun.pending]: (state, { payload }) => {
            state.token = null
            state.user = null
        },
        

        // logout
        [logoutFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.token = null
                state.user = {}
                message.success("Logout succesfully..!")
                return
            } else {
                 message.error(payload.error )
            }
        },
        [logoutFun.pending]: (state, { payload }) => {
            state.token = null
            state.user = {}
        },
    }
})

export default registerSlice.reducer