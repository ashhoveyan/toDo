import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FilterPipe} from "./filter.pipe";
import { FilterAsImportantPipe} from "./filterAsImportant.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FilterAsImportantPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FilterPipe, FilterAsImportantPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
