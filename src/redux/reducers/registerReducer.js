import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postApiWithoutToken } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    staper: 1,
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    password: '',
    bank_details: {},
    pickup_location: {},
    development: 'http://localhost:8000',
    isLoading: false,
    error: '',
}

export const registrationFun = createAsyncThunk(
    'register/vendor',
    async (bodydata) => {
        const data = await postApiWithoutToken(`${initialState.development}/auth/register`, bodydata)
        return data
    }
)

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        incrementStaper: (state, { payload }) => {
            if (state.staper > 0) {
                state.staper++
            }
        },
        decrementStaper: (state, { payload }) => {
            if (state.staper < 4) {
                state.staper--
            }
        },
        registerDetails: (state, { payload }) => {
            state.first_name = payload.first_name;
            state.last_name = payload.last_name;
            state.mobile = payload.mobile;
            state.email = payload.email;
            state.password = payload.password;
        },
        addBankDetails: (state, { payload }) => {
            state.bank_details = { ...state.bank_details, ...payload };
        },
        addPickupLocation: (state, { payload }) => {
            state.pickup_location = { ...state.pickup_location, ...payload };
        },
    },
    extraReducers: {
        [registrationFun.fulfilled]: (state, { payload }) => {
            console.log(payload)
            if (payload.status == 200) {
                message.success("Registartion succesfully..!")
                state.isLoading = false
                state.error = ''
                state.staper = 1
                state.first_name = ''
                state.last_name = ''
                state.mobile = ''
                state.email = ''
                state.password = ''
                state.bank_details = {}
                state.pickup_location = {}
                state.isLoading = false
                state.error = ''
            } if (payload.status == 500) {
                message.error(payload?.message + '!')
                state.isLoading = false
                state.error = payload?.error;
            } else {
                message.error(payload.message ,'!', payload.error)
                state.isLoading = false
                state.error = payload?.error;
            }
        },
        [registrationFun.pending]: (state, { payload }) => {
            state.isLoading = true
            state.error = ''
        },
    }
})

export const { incrementStaper, decrementStaper, registerDetails, addBankDetails, addPickupLocation } = registerSlice.actions

export default registerSlice.reducer