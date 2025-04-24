import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            const item = action.payload
            const existing = state.cartItems.find((i) => i.id === item.id)
            if (existing) {
                existing.amount += 1
            } else {
                state.cartItems.push({ ...item, amount: 1 })
            }
        },
        increment: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload)
            if (item) {
                item.amount++
            }
        },
        decrement: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload)
            if (item && item.amount > 1) {
                item.amount--
            } else if (item && item.amount === 1) {
                state.cartItems = state.cartItems.filter((i) => i.id !== item.id)
            }
        }
    }
}
)

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;