import { configureStore } from '@reduxjs/toolkit'
import RtkReducer from './RtkReducer'

const Rtkstore = configureStore({
    reducer: {
        counter: RtkReducer
    }
})

export default Rtkstore
