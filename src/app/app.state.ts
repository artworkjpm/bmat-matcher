import { Songs } from "./models/index";

export interface AppState {
	database: Songs[];
	searchText: string;
	inputs: Songs[];
}
