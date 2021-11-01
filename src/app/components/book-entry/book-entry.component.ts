import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookModel } from '../../models/book-entries';

@Component({
  selector: 'book-entry',
  templateUrl: './book-entry.component.html'
})
export class BookEntryComponent implements OnInit {

  @Output() addNewBook = new EventEmitter<bookModel>();
  bookEntry: FormGroup;
  formInvalid: boolean = false;

  constructor(fb:FormBuilder) { 
    this.bookEntry = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['',  Validators.required]

    });
  }

  ngOnInit(): void {
  }


  addNewRow() {
    if(this.bookEntry.valid){
      this.addNewBook.emit(this.bookEntry.value);
    this.resetForm();
    } else {
      this.formInvalid = true;
    }
  }

  resetForm(){
    this.bookEntry.reset();
  }
}
