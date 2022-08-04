import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import categoryReducer from './categorySlice'
import gamesReducer from './gamesSlice'

 const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoryReducer,
    games: gamesReducer,
  }
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch