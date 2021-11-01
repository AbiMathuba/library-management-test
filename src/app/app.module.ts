import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { TableComponent } from './components/table/table.component';
import { BookEntryComponent } from './components/book-entry/book-entry.component';
import { EditableComponent } from './components/editable/editable.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    TableComponent,
    BookEntryComponent,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
