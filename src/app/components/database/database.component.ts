import { Component } from "@angular/core";
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
export class DatabaseComponent {
	data$ = this.store.pipe(select((state) => state.database));
	constructor(public store: Store<AppState>) {}

	remove(index: number) {
		this.store.dispatch(removeData({ index }));
	}
}
