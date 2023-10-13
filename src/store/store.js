// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import likesReducer from '../reducers/likesSlice';

const store = configureStore({
  reducer: {
    likes: likesReducer,
    // Other reducers...
  },
});

export default store;
