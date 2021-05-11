import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { NgxCsvParser, NgxCSVParserError } from "ngx-csv-parser";
import { data } from "../../../assets/csv/sound-recordings";

@Component({
	selector: "app-database",
	templateUrl: "./database.component.html",
	styleUrls: ["./database.component.scss"],
})
export class DatabaseComponent implements OnInit {
	csvRecords: any;
	data = data;
	constructor(private ngxCsvParser: NgxCsvParser) {}

	@ViewChild("fileImportInput") fileImportInput: any;

	ngOnInit(): void {}

	fileChangeListener($event: any): void {
		const files = $event.srcElement.files;
		this.ngxCsvParser
			.parse(files[0], { header: true, delimiter: "," })
			.pipe()
			.subscribe(
				(result) => {
					console.log("Result", result);
					this.csvRecords = result;
				},
				(error: NgxCSVParserError) => {
					console.log("Error", error);
				}
			);
	}
}
