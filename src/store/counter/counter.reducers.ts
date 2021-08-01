import { CounterReducers } from './counter.model';

export const counterReducers: CounterReducers = {
  increment(state) {
    state.value++;
  },
  decrement(state) {
    state.value--;
  },
  incrementByAmount(state, action) {
    state.value += action ? action.payload : 0;
  },
};
