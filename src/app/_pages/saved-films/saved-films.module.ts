import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedFilmsComponent } from './saved-films/saved-films.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TopFilmsService } from '../top-films.service';



@NgModule({
  declarations: [
    SavedFilmsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ]
  
})
export class SavedFilmsModule { }

