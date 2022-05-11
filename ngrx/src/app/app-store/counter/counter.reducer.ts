import { createReducer, on } from '@ngrx/store'
import { increment, decrement, setCounter } from './counter.action'

const initialState: number = 1000

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(setCounter, (state, payload) => state = payload.counter)
)
