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
      console.log('this.bookEntry.invalid',this.bookEntry.invalid);
      this.addNewBook.emit(this.bookEntry.value);
    this.resetForm();
      console.log('sdas', this.bookEntry.value);
    } else {
      this.formInvalid = true;
      console.log('this.bookEntry.invalid',this.formInvalid);
      
    }
  }

  resetForm(){
    this.bookEntry.reset();
  }
}
