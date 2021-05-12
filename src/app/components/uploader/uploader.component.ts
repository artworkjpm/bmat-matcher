import { Component, OnInit, ViewChild } from "@angular/core";
import { NgxCsvParser, NgxCSVParserError } from "ngx-csv-parser";
import { Songs } from "src/app/models";

@Component({
	selector: "app-uploader",
	templateUrl: "./uploader.component.html",
	styleUrls: ["./uploader.component.scss"],
})
export class UploaderComponent implements OnInit {
	csvRecords: Songs[] = [];
	@ViewChild("fileImportInput") fileImportInput: any;
	constructor(private ngxCsvParser: NgxCsvParser) {}

	ngOnInit(): void {}

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
}
