import { Songs } from "../models/index";
import { createReducer, on } from "@ngrx/store";
import { addInput, removeData, removeLastItemAdded } from "../actions/data.actions";
import { data } from "../../assets/csv/sound-recordings";

const initialState = data as Songs[];

export const dataReducer = createReducer<Songs[]>(
	initialState,
	on(removeData, (state, { index }) => {
		const array = [...state];
		array.splice(index, 1);
		return array;
	}),
	on(addInput, (state, action) =>
		state.concat({
			...action.song,
		})
	),
	on(removeLastItemAdded, (state) => {
		const array = [...state];
		array.pop();
		return array;
	})
);