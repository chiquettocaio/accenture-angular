import { createReducer, on } from '@ngrx/store'
import { IUserStore } from './models/user.model'
import { setUser, setUserAge, setUserName, setUserRole } from './user.action'

const initialState: IUserStore = {
  name: 'Padrao',
  age: 100,
  role: 'Desconhecida'
}

export const userReducer = createReducer(
  initialState,

  on(setUserAge, (state, payload) => {
    return { ...state, age: payload.age }
  }),

  on(setUserName, (state, payload) => {
    return { ...state, name: payload.name }
  }),

  on(setUserRole, (state, payload) => {
    return { ...state, role: payload.role }
  }),

  on(setUser, (state, payload) => {
    return { ...state, ...payload }
  })
)
