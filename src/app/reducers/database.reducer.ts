import { Songs } from "../models/index";
import { Action, createReducer, on } from "@ngrx/store";
import { addInput } from "../actions/data.actions";
import { data } from "../../assets/csv/sound-recordings";

const initialState = data as Songs[];

export const dataReducer = createReducer<Songs[]>(
	initialState,

	on(addInput, (state, action) =>
		state.concat({
			...action.song,
		})
	)
);
