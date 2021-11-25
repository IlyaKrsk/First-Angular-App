import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFilmsComponent } from './top-films/top-films.component';
import { Page2Component } from './page2/page2.component';
import { HttpClientModule } from '@angular/common/http';
import { TopFilmsService } from './top-films.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LiterComponent } from './page2/liter/liter.component';
import { CutTextPipe } from './cut-text.pipe';



@NgModule({
  declarations: [TopFilmsComponent, Page2Component, LiterComponent, CutTextPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule

  ]
})
export class TopFilmsModule { }
