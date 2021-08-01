import { counterReducer, counterName } from './counter/counter.slice';


export const rootReducer = {
  [counterName]: counterReducer
}
