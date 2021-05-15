import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { SearchComponent } from "../search/search.component";
import { removeData } from "src/app/actions/data.actions";
import { Observable } from "rxjs";
import { Songs } from "src/app/models";
import { filterDataBase } from "src/app/selectors";

@Component({
	selector: "app-database",
	templateUrl: "./database.component.html",
	styleUrls: ["./database.component.scss"],
	providers: [SearchComponent],
})
export class DatabaseComponent implements OnInit {
	data$: Observable<Array<Songs>> | undefined;
	searchText$ = this.store.select((state) => state.searchText);
	constructor(public store: Store<AppState>) {}

	remove(index: number) {
		this.store.dispatch(removeData({ index }));
	}
	ngOnInit() {
		this.searchText$.subscribe((item) => {
			this.data$ = this.store.select(filterDataBase(item));
		});
	}
}
