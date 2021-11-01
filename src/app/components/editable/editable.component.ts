import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bookModel } from '../../models/book-entries';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html'
})
export class EditableComponent implements OnInit {
  @Output() updatedItem = new EventEmitter<string>();
  @Input() table: bookModel[]=  [];

  @Input() bookItem: string;
  @Input() isEditMode: boolean = false;

  public oldValue: string;
  
  constructor() { }

  ngOnInit(): void {
    this.oldValue = this.bookItem;
  }

  valueUpdated(newValue:any){
    this.updatedItem.emit(newValue.target.value);
    console.log('newValue',newValue.target.value);

  }
}
