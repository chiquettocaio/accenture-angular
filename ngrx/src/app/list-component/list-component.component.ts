import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IList } from '../app-store/list/models/list.model';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
  items$: Observable<IList[]> = this.store.select((store: any) => store.list)

  constructor (private store: Store) { }
}
