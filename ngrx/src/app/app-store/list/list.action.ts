import { createAction, props } from "@ngrx/store"
import { IList } from "./models/list.model"

export const pushToList = createAction('[List] Push to list', props<IList>())
export const popFromList = createAction('[List] Pop from list')
