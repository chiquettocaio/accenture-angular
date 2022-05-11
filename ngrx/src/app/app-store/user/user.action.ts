import { createAction, props } from "@ngrx/store"

import { IUserStore } from "./models/user.model"

interface UserStoreName extends Pick<IUserStore, 'name'> {}
interface UserStoreAge extends Pick<IUserStore, 'age'> {}
interface UserStoreRole extends Pick<IUserStore, 'role'> {}

export const setUserName = createAction('[User] Set user name', props<UserStoreName>())
export const setUserAge = createAction('[User] Set user age', props<UserStoreAge>())
export const setUserRole = createAction('[User] Set user role', props<UserStoreRole>())
export const setUser = createAction('[User] Set user', props<IUserStore>())
