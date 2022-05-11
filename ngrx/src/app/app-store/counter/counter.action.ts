import { createAction, props } from '@ngrx/store'

interface SetCounterInterface {
  counter: number
}

export const increment = createAction('[Counter] Increment')
export const decrement = createAction('[Counter] Decrement')
export const setCounter = createAction('[Counter] Set counter', props<SetCounterInterface>())
