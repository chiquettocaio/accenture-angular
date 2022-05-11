import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { popFromList, pushToList } from '../app-store/list/list.action';

@Component({
  selector: 'list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent {
  item: string = ''

  constructor (private store: Store) { }

  setItem ({ target }: any): void {
    this.item = target.value
  }

  addItemToStore (): void {
    this.store.dispatch(pushToList({ item: this.item }))
    this.item = ''
  }

  removeLastFromStore (): void {
    this.store.dispatch(popFromList())
  }
}
