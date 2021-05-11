import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'about-this-app', component: AboutAppComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
