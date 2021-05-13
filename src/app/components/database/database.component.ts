import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { SearchComponent } from "../search/search.component";
import { removeData } from "src/app/actions/data.actions";

@Component({
	selector: "app-database",
	templateUrl: "./database.component.html",
	styleUrls: ["./database.component.scss"],
	providers: [SearchComponent],
})
export class DatabaseComponent implements OnInit {
	data$ = this.store.pipe(select((state) => state.database));
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.data$.subscribe((item) => console.log(item));
	}

	remove(index: number) {
		this.store.dispatch(removeData({ index }));
	}
}
