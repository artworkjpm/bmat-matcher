import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const database = (state: AppState) => state.database;
export const inputs = (state: AppState) => state.inputs;

export const filterDataBase = (enteredText: string) => createSelector(database, (state) => state.filter((item) => item.artist.toLowerCase().includes(enteredText.toLowerCase())));

export const addMatchers = (addMatcher: boolean) =>
	createSelector(inputs, (songs) => {
		songs.map((item) => {
			if (addMatcher) {
				return (item.matchesArtist = true);
			}
			return item;
		});
		return songs;
	});
