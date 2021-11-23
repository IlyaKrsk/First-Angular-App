import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopFilmsComponent } from './_pages/top-films/top-films.component';
import { Page2Component } from './_pages/page2/page2.component';
import { SavedFilmsComponent } from './_pages/saved-films/saved-films/saved-films.component';


const routes: Routes = [
  {path: '', component: TopFilmsComponent},
  {path: 'page2', component: Page2Component},
  {path: 'saved', component: SavedFilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
