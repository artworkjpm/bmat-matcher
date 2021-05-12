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
	artistAndTitle: Songs[] = [];
	artistAndIRSC: Songs[] = [];
	isMatched = false;
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
		this.inputs.map((item) => {
			if (this.data.find((a) => a.artist === item.artist && a.title === item.title)) {
				this.artistAndTitle.push(item);
				item.hasArtistAndTitle = true;
			}
			if (this.data.find((a) => a.artist === item.artist && a.isrc === item.isrc)) {
				this.artistAndIRSC.push(item);
				item.hasArtistAndIRSC = true;
			}
		});

		console.log(this.artistAndTitle);
	}

	remove(index: number) {
		this.inputs.splice(index, 1);
	}
}
