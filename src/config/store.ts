import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../store';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

 RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
