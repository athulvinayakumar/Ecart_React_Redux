import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [], // since this state have to hold more than one item
    reducers: {
        // actions
        // function to add item to state
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        // function to remove item 
        removeWishlist:(state,action)=>{
            // it returns a new array with items satisfing the conditoin
           return state.filter(item=>item.id!==action.payload)
        }
    }

})
export const{addToWishlist, removeWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer