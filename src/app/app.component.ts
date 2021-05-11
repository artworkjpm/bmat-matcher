import { Component } from "@angular/core";
import { TopNavComponent } from "./components/top-nav/top-nav.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	providers: [TopNavComponent],
})
export class AppComponent {
	title = "bmat-matcher";
}
