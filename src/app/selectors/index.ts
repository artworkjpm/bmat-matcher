import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const database = (state: AppState) => state.database;

export const filterDataBase = (enteredText: string) => createSelector(database, (state) => state.filter((item) => item.artist.toLowerCase().includes(enteredText.toLowerCase())));
