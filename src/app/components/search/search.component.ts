import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { filterTable } from "src/app/actions/data.actions";
import { AppState } from "src/app/app.state";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
	searchText = "";

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {}

	filterTable() {
		this.store.dispatch(filterTable({ text: this.searchText, field: "artist" }));
	}
}
