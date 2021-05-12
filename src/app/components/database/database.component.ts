import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";

import { Songs } from "src/app/models";
import { data } from "../../../assets/csv/sound-recordings";
import { inputs } from "../../../assets/csv/sound-inputs";

@Component({
	selector: "app-database",
	templateUrl: "./database.component.html",
	styleUrls: ["./database.component.scss"],
})
export class DatabaseComponent implements OnInit {
	data = data as Songs[];
	inputs = inputs as Songs[];
	artist: Songs[] = [];
	title: Songs[] = [];
	isrc: Songs[] = [];
	duration: Songs[] = [];
	checkedArtist = true;
	checkedTitle = true;
	checkedISRC = true;
	checkedDuration = true;
	constructor() {}

	ngOnInit() {
		console.log(this.data, this.inputs);
		this.startSearch();
	}

	startSearch() {
		this.showArtist();
		this.showTitle();
		this.showISRC();
		this.showDuration();
		console.log(this.artist);
	}

	remove(index: number) {
		this.inputs.splice(index, 1);
		this.startSearch();
	}

	toggleArtist() {
		if (!this.checkedArtist) {
			this.inputs.map((item) => {
				item.matchesArtist = false;
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

	showArtist() {
		this.artist = [];
		this.inputs.map((item) => {
			if (this.data.find((a) => a.artist === item.artist)) {
				this.artist.push(item);
				this.checkedArtist && (item.matchesArtist = true);
			}
		});
	}

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
}
