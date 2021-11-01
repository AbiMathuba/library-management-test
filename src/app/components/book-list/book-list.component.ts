import { Component, OnInit } from '@angular/core';
import { bookModel } from '../../models/book-entries';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  // bookEntrie = [];
  public editMode: boolean = false;
  books: bookModel[] = [ 
     {
    "title": "Out Of Space",
    "author": "Matthew Brow",
    "genre": "fantasy"
  }];


  constructor() { 
   
  }

  ngOnInit(): void {
  }


  addBookEvent(book: bookModel){
    this.books = [...this.books, book]
    console.log('books', this.books);
    
      // this.editMode = !this.editMode;
  }

}
