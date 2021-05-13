import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const MaterialComponents = [MatMenuModule, MatToolbarModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatBadgeModule, MatIconModule, MatDialogModule, MatSelectModule, MatRadioModule, MatExpansionModule, MatCheckboxModule, MatTabsModule, MatSnackBarModule];

@NgModule({
	imports: [MaterialComponents],
	exports: [MaterialComponents],
})
export class MaterialModule {}
