import { createAction, props } from "@ngrx/store";
import { Songs } from "../models/index";

export const removeData = createAction("[DATABASE] Remove Song", props<{ index: number }>());
export const addInput = createAction("[DATABASE] Add Input", props<{ song: Songs }>());
export const removeLastItemAdded = createAction("[DATABASE] removeLastItemAdded");
