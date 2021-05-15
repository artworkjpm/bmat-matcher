import { Component, OnInit } from "@angular/core";
import { Songs } from "src/app/models";
import { data } from "../../../assets/csv/sound-recordings";
import { inputs } from "../../../assets/csv/sound-inputs";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { addInput, removeLastItemAdded } from "src/app/actions/data.actions";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { isNgTemplate } from "@angular/compiler";

@Component({
	selector: "app-inputs",
	templateUrl: "./inputs.component.html",
	styleUrls: ["./inputs.component.scss"],
})
export class InputsComponent implements OnInit {
	data = data as Songs[];
	data$ = this.store.select((state) => state.database);
	inputs = inputs as Songs[];
	artist: Songs[] = [];
	title: Songs[] = [];
	isrc: Songs[] = [];
	duration: Songs[] = [];
	checkedArtist = true;
	checkedTitle = true;
	checkedISRC = true;
	checkedDuration = true;
	constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}

	ngOnInit() {
		/* console.log(this.data, this.inputs); */
		this.startSearch();
	}

	remove(index: number) {
		this.inputs.splice(index, 1);
		this.startSearch();
	}

	startSearch() {
		this.showArtist();
		/* 	this.showTitle();
		this.showISRC();
		this.showDuration(); */
		console.log("artistList", this.artist);
	}

	showArtist() {
		this.artist = [];
		this.data$.pipe(take(1)).subscribe((song) => {
			this.inputs.map((item) => {
				if (song.find((a) => a.artist === item.artist)) {
					this.checkedArtist && (item = { ...item, matchesArtist: true });
					this.artist.push(item);
					return item;

					/* console.log("run showArtist", this.artist); */
				}
				return item;
			});
		});
		console.log("this.inputs", this.inputs);
	}

	addToDB(item: Songs) {
		console.log(item);
		this.store.dispatch(addInput({ song: item }));
		let snackBarRef = this.snackBar.open(`${item.artist} "${item.title}" - added to Database`, "Undo this action", {
			duration: 6000,
		});
		snackBarRef.onAction().subscribe(() => {
			this.store.dispatch(removeLastItemAdded());
		});
		this.startSearch();
	}

	/* 	showArtist() {
		this.artist = [];
		this.inputs.map((item) => {
			if (this.data.find((a) => a.artist === item.artist)) {
				this.artist.push(item);
				this.checkedArtist && (item.matchesArtist = true);
			}
		});
	} */

	showTitle() {
		this.title = [];
		this.inputs.map((item) => {
			if (this.data.find((a) => a.title === item.title)) {
				this.title.push(item);
				this.checkedTitle && (item.matchesTitle = true);
			}
		});
	}

	showISRC() {
		this.isrc = [];
		this.inputs.map((item) => {
			if (item.isrc.length > 0) {
				if (this.data.find((a) => a.isrc === item.isrc)) {
					this.isrc.push(item);
					this.checkedISRC && (item.matchesISRC = true);
				}
			}
		});
	}

	showDuration() {
		this.duration = [];
		this.inputs.map((item) => {
			if (item.duration) {
				if (this.data.find((a) => a.duration === item.duration)) {
					this.duration.push(item);
					this.checkedDuration && (item.matchesDuration = true);
				}
			}
		});
	}

	toggleArtist() {
		if (!this.checkedArtist) {
			this.inputs.map((item) => {
				item = { ...item, matchesArtist: false };
			});
		} else {
			this.showArtist();
		}
	}

	toggleTitle() {
		if (!this.checkedTitle) {
			this.inputs.map((item) => {
				item.matchesTitle = false;
			});
		} else {
			this.showTitle();
		}
	}

	toggleISRC() {
		if (!this.checkedISRC) {
			this.inputs.map((item) => {
				item.matchesISRC = false;
			});
		} else {
			this.showISRC();
		}
	}

	toggleDuration() {
		if (!this.checkedDuration) {
			this.inputs.map((item) => {
				item.matchesDuration = false;
			});
		} else {
			this.showDuration();
		}
	}
}
