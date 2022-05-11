import { createReducer, on } from '@ngrx/store'
import { popFromList, pushToList } from './list.action'

const initialState: string[] = ['Primeiro elemento']

export const listReducer = createReducer(
  initialState,
  on(pushToList, (state, payload) => [ ...state, payload.item ]),

  on(popFromList, (state) => {
    const stateCp = [ ...state ]
    stateCp.pop()
    return stateCp
  })
)
