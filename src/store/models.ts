import { CreateSliceOptions } from "@reduxjs/toolkit";

export type StoreNames = 
  'counter';

export interface CustomCreateSlice<T> {
  (name: StoreNames): CreateSliceOptions
}