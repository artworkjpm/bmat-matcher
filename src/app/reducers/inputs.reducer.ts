import { Songs } from "../models/index";
import { Action, createReducer, on } from "@ngrx/store";
import { removeInput, showArtist } from "../actions/inputs.actions";
import { inputs } from "../../assets/csv/sound-inputs";
import { data } from "src/assets/csv/sound-recordings";

const initialState = inputs as Songs[];

export const inputsReducer = createReducer<Songs[]>(
	initialState,
	on(removeInput, (state, { index }) => {
		const array = [...state];
		array.splice(index, 1);
		return array;
	})
);
