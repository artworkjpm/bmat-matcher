import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { AboutAppComponent } from "./components/about-app/about-app.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { DatabaseComponent } from "./components/database/database.component";
import { NgxCsvParserModule } from "ngx-csv-parser";
import { UploaderComponent } from "./components/uploader/uploader.component";
import { InputsComponent } from "./components/inputs/inputs.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { StoreModule } from "@ngrx/store";
import { dataReducer } from "./reducers/database.reducer";

@NgModule({
	declarations: [AppComponent, TopNavComponent, AboutAppComponent, AboutMeComponent, DatabaseComponent, UploaderComponent, InputsComponent, HomeComponent, SearchComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({
			database: dataReducer,
		}),
		MaterialModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FlexLayoutModule,
		FormsModule,
		NgxCsvParserModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
