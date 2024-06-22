import { configureStore } from '@reduxjs/toolkit'

// REDUCERS
import counterReducer from './counter/counterSlice'
import userReducer  from './user/userSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
})