import { Component, OnInit } from "@angular/core";
import { Songs } from "src/app/models";
import { data } from "../../../assets/csv/sound-recordings";
import { inputs } from "../../../assets/csv/sound-inputs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { addInput, removeLastItemAdded } from "src/app/actions/data.actions";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "app-inputs",
	templateUrl: "./inputs.component.html",
	styleUrls: ["./inputs.component.scss"],
})
export class InputsComponent implements OnInit {
	data = data as Songs[];
	data$ = this.store.select((state) => state.database);
	inputs = inputs as Songs[];
	inputs$ = this.store.select((state) => state.inputs);
	artist: number[] = [];
	title: number[] = [];
	isrc: number[] = [];
	duration: number[] = [];
	checkedArtist = true;
	checkedTitle = true;
	checkedISRC = true;
	checkedDuration = true;
	constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}

	ngOnInit() {
		this.startSearch();
	}

	remove(index: number) {
		this.inputs.splice(index, 1);
		this.startSearch();
	}

	startSearch() {
		this.showArtist();
		/* this.showTitle(); */
		/* 	this.showISRC();
		this.showDuration(); */
		console.log("artistList", this.artist);
	}

	/* 	this.data$.pipe(take(1)).subscribe((song) => {
		this.inputs.map((item) => {
			if (song.find((a) => a.artist === item.artist)) {
				this.checkedArtist && (item = { ...item, matchesArtist: true });
				this.artist.push(item);
				return item;


			}
			return item;
		});
	}); */

	showArtist() {
		this.artist = [];
		this.inputs$?.subscribe((song) => {
			song.map((song, i) =>
				this.data$?.subscribe((data) =>
					data.map((item) => {
						if (song.artist === item.artist) {
							this.artist.push(i);
							this.artist = [...new Set(this.artist)];
						} else if (song.title === item.title) {
							this.title.push(i);
							this.title = [...new Set(this.title)];
						}
					})
				)
			);
		});
	}

	addToDB(item: Songs) {
		this.store.dispatch(addInput({ song: item }));
		let snackBarRef = this.snackBar.open(`${item.artist} "${item.title}" - added to Database`, "Undo this action", {
			duration: 6000,
		});
		snackBarRef.onAction().subscribe(() => {
			this.store.dispatch(removeLastItemAdded());
		});
		this.startSearch();
	}
}
