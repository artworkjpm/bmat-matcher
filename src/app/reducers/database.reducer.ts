import { Songs } from "../models/index";
import { createReducer, on } from "@ngrx/store";
import { addInput, filterTable, removeData, removeLastItemAdded, saveSearchText } from "../actions/data.actions";
import { data } from "../../assets/csv/sound-recordings";

const initialState = data as Songs[];

export const searchReducer = createReducer(
	{ text: "" },
	on(saveSearchText, (state, { text }) => ({ ...state, text }))
);

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
	}),
	on(filterTable, (state, action) => {
		return state;
		/* return action.text ? state.filter((item) => item.artist.toLowerCase().includes(action.text.toLowerCase())) : (data as Songs[]); */
	})
);
