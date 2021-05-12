import { Component, OnInit } from "@angular/core";

import { Songs } from "src/app/models";
import { data } from "../../../assets/csv/sound-recordings";
import { SearchComponent } from "../search/search.component";

@Component({
	selector: "app-database",
	templateUrl: "./database.component.html",
	styleUrls: ["./database.component.scss"],
	providers: [SearchComponent],
})
export class DatabaseComponent implements OnInit {
	data = data as Songs[];
	constructor() {}

	ngOnInit() {
		console.log(this.data);
	}
}
