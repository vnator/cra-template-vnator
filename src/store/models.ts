import { CreateSliceOptions } from '@reduxjs/toolkit';

export type StoreNames = 'counter';

export interface CustomCreateSlice {
  (name: StoreNames): CreateSliceOptions;
}
