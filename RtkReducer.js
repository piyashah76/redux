import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    data: []
}
const RtkReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        addData: (state, action) => {
            state.data.push(action.payload)
        },
        DeleteData: (state, action) => {
            state.data = state.data.filter((i, index) => {
                return index !== action.payload
            })
        },
        UpdateData: (state, action) => {
            const { index, newdata } = action.payload
            state.data = state.data.map((item, i) => i === index ? newdata : item)
        }
    }
})

export const { increment, decrement, addData, DeleteData, UpdateData } = RtkReducer.actions
export default RtkReducer.reducer
