import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookModel } from '../../models/book-entries';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input() table: bookModel[]=  [];
  amendedEntry: FormGroup;

  editMode: boolean = false;
  constructor(fb:FormBuilder) { 
    this.amendedEntry = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['',  Validators.required]

    });
  }

  ngOnInit():void{}

  cancel(){
      this.editMode = ! this.editMode;
  }
  remove(book:bookModel, id:number){

        this.table.splice(id,1)
        console.log(this.table);
  }

  update(book:bookModel, id:number){

    if(this.editMode){
    // console.log('book',book, id);
    // need to check id to toggle edit state
    } else{
      this.editMode = ! this.editMode;

    }
  }

  save(rowBefore:bookModel, id:number){
    console.log('rowBefore',rowBefore, id);
    //find object and replace it 
  }

  updateItem(updatedString:any){
    //get emited value and update object
    console.log('even',event)
  }
}
