import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { NgxCsvParser, NgxCSVParserError } from "ngx-csv-parser";
import { Songs } from "src/app/models";
import { data } from "../../../assets/csv/sound-recordings";
import { inputs } from "../../../assets/csv/sound-inputs";

@Component({
	selector: "app-database",
	templateUrl: "./database.component.html",
	styleUrls: ["./database.component.scss"],
})
export class DatabaseComponent implements OnInit {
	csvRecords: Songs[] = [];
	data = data as Songs[];
	inputs = inputs as Songs[];
	artist: Songs[] = [];
	title: Songs[] = [];
	irsc: Songs[] = [];
	duration: Songs[] = [];
	checkedArtist = true;
	checkedTitle = true;
	checkedIRSC = true;
	checkedDuration = true;
	constructor(private ngxCsvParser: NgxCsvParser) {}

	@ViewChild("fileImportInput") fileImportInput: any;

	ngOnInit() {
		console.log(this.data, this.inputs);
		this.startSearch();
	}

	fileChangeListener($event: any): void {
		const files = $event.srcElement.files;
		this.ngxCsvParser.parse(files[0], { header: true, delimiter: "," }).subscribe(
			(result) => {
				this.csvRecords = result as Songs[];
				/* this.startSearch(this.csvRecords); */
			},
			(error: NgxCSVParserError) => {
				console.log("Error", error);
			}
		);
	}

	/* 	startSearch(inputs: Songs[]) {
		console.log(inputs);
	} */

	startSearch() {
		this.showArtist();
		this.showTitle();
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

	showArtist() {
		this.artist = [];
		this.inputs.map((item) => {
			if (this.data.find((a) => a.artist === item.artist)) {
				this.artist.push(item);
				item.matchesArtist = true;
			}
		});
	}

	showTitle() {
		this.title = [];
		this.inputs.map((item) => {
			if (this.data.find((a) => a.title === item.title)) {
				this.title.push(item);
				item.matchesTitle = true;
			}
		});
	}
}
