import { createAction, props } from "@ngrx/store";
import { Songs } from "../models/index";

export const removeInput = createAction("[INPUT] Remove", props<{ index: number }>());
