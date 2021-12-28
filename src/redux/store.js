import { configureStore } from '@reduxjs/toolkit';
import juiceReducer from './slice';

const store = configureStore({
    reducer: {
        juice: juiceReducer
    }
})

export default store;