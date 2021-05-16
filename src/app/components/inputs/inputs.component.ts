import { Component, OnInit } from "@angular/core";
import { Songs } from "src/app/models";
import { data } from "../../../assets/csv/sound-recordings";
import { inputs } from "../../../assets/csv/sound-inputs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { addInput, removeLastItemAdded } from "src/app/actions/data.actions";
import { MatSnackBar } from "@angular/material/snack-bar";
import { removeInput } from "src/app/actions/inputs.actions";

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
		this.startMatchChecker();
		this.data$.subscribe(() => this.startMatchChecker());
	}

	remove(index: number) {
		this.store.dispatch(removeInput({ index }));
		this.startMatchChecker();
	}

	startMatchChecker() {
		this.artist = [];
		this.title = [];
		this.isrc = [];
		this.duration = [];

		this.inputs$.subscribe((song) => {
			song.map((song, i) =>
				this.data$.subscribe((data) =>
					data.map((item) => {
						if (song.artist && song.artist === item.artist) {
							this.artist.push(i);
							this.artist = [...new Set(this.artist)];
						}
						if (song.title && song.title === item.title) {
							this.title.push(i);
							this.title = [...new Set(this.title)];
						}
						if (song.isrc && song.isrc === item.isrc) {
							this.isrc.push(i);
							this.isrc = [...new Set(this.isrc)];
						}
						if (song.duration && song.duration === item.duration) {
							this.duration.push(i);
							this.duration = [...new Set(this.duration)];
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
	}
}
