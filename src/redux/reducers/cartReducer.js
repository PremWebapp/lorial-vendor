import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    seletedItem: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, { payload }) => {
            const addcount = JSON.parse(JSON.stringify(payload))
            addcount['quantity'] = 1
            addcount['originalPrice'] = addcount.price
            const ex = state.cartItems.filter(item => item.id === payload.id)
            if (ex.length) return state
            else state.cartItems.push(addcount)
        },
        removeItemFromCart: (state, { payload }) => {
            const items = state.cartItems.filter(item => item.id !== payload);
            state.cartItems = items
        },
        selectedProduct: (state, { payload }) => {
            state.seletedItem = payload
        },
        incrementCartProductCount: (state, { payload }) => {
            const selectedItem = JSON.parse(JSON.stringify(state.cartItems))
            const item = selectedItem[payload]
            if (item.quantity <= item.rating.count) {
                selectedItem[payload].quantity++
                selectedItem[payload].price = item.quantity * item.originalPrice
                state.cartItems = selectedItem
            }
        },
        decrementCartProductCount: (state, { payload }) => {
            const selectedItem = JSON.parse(JSON.stringify(state.cartItems))
            const item = selectedItem[payload]
            if (item.quantity > 1) {
                selectedItem[payload].quantity--
                selectedItem[payload].price = item.quantity * item.originalPrice
            }
            state.cartItems = selectedItem
        },
    },
})

export const { addItemToCart, removeItemFromCart, selectedProduct, incrementCartProductCount, decrementCartProductCount } = cartSlice.actions
export default cartSlice.reducer