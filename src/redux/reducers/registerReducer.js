import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    staper: 1,
}

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
    },
})

export const {incrementStaper, decrementStaper } = registerSlice.actions

export default registerSlice.reducer