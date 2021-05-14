import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AppState } from "../app.state";
import * as fromActions from "../actions/data.actions";
import { Songs } from "../models";

@Injectable()
export class DataEffects {
	data$ = this.store.pipe(select((state) => state.database));
	array: Songs[] = [];
	filterSongs$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromActions.filterTable),
			mergeMap((item) =>
				this.data$.pipe(
					map((songs) => ((this.array = songs.filter((song) => song.artist.toLocaleLowerCase().includes(item.text.toLocaleLowerCase()))), console.log(this.array), { type: "[DATABASE] filterTableComplete", payload: this.array })),
					catchError(() => EMPTY)
				)
			)
		)
	);

	constructor(private store: Store<AppState>, private actions$: Actions) {}
}
