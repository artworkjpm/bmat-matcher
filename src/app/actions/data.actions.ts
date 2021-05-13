import { createAction, props } from "@ngrx/store";
import { Songs } from "../models/index";

export const addInput = createAction("[INPUT] Add", props<{ song: Songs }>());
