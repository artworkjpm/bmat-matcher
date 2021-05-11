import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutAppComponent } from "./components/about-app/about-app.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { DatabaseComponent } from "./components/database/database.component";

const routes: Routes = [
	{ path: "", component: DatabaseComponent },
	{ path: "about-this-app", component: AboutAppComponent },
	{ path: "about-me", component: AboutMeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
