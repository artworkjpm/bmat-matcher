import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const database = (state: AppState) => state.database;

export const filterDataBase = (enteredText: string, field: string) => {
	return createSelector(database, (state) => state.filter((item) => String(item[field]).toLowerCase().includes(enteredText.toLowerCase())));
};
