import { Songs } from "../models/index";
import { createReducer, on } from "@ngrx/store";
import { removeInput } from "../actions/inputs.actions";
import { inputs } from "../../assets/csv/sound-inputs";

const initialState = inputs as Songs[];

export const inputsReducer = createReducer<Songs[]>(
	initialState,
	on(removeInput, (state, { index }) => {
		const array = [...state];
		array.splice(index, 1);
		return array;
	})
);
