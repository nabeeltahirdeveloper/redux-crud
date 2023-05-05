import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listItem: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },


    addItem: (state, action)=>{
        state.listItem= [...state.listItem, action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem } = todoSlice.actions

export default todoSlice.reducer