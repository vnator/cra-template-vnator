import { createSlice } from '@reduxjs/toolkit'
import { counterInitialState } from './counter.model';
import { counterReducers } from './counter.reducers';

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: counterReducers,
})

const {
  actions,
  reducer,
  name,
} = counterSlice;


export const counterReducer = reducer;
export const counterName = name;
export const {
  decrement,
  increment,
  incrementByAmount
} = actions;