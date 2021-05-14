import { createAction, props } from "@ngrx/store";
import { Songs } from "../models/index";

export const removeData = createAction("[DATABASE] Remove Song", props<{ index: number }>());
export const addInput = createAction("[DATABASE] Add Input", props<{ song: Songs }>());
export const removeLastItemAdded = createAction("[DATABASE] removeLastItemAdded");
export const filterTable = createAction("[DATABASE] filterTable", props<{ text: string; field: string }>());
export const saveSearchText = createAction("[DATABASE] saveSearchText", props<{ text: string }>());
