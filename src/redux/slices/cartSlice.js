import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // actions
        addtoCart: (state, action) => {
            state.push(action.payload)
        },

        removeFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },

        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const { addtoCart , removeFromCart ,emptyCart} = cartSlice.actions
export default cartSlice.reducer