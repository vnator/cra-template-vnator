import { DefaultActionReducer } from '../../utils/models/commonReduxModels';

export type CounterActions = 'increment' | 'decrement' | 'incrementByAmount';

export interface CounterState {
  value: number;
}

export type CounterReducers = Record<
  CounterActions,
  DefaultActionReducer<CounterState, number>
>;

export const counterInitialState: CounterState = {
  value: 0,
};
