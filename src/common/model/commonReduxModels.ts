import { PayloadAction } from '@reduxjs/toolkit';

export interface DefaultActionReducer<T, A> {
  (state: T, action?: PayloadAction<A>): void;
}
