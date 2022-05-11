import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, setCounter } from '../app-store/counter/counter.action';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number> = this.store.select((store: any) => store.count)

  constructor (private store: Store) { }

  increment (): void {
    this.store.dispatch(increment())
  }

  decrement (): void {
    this.store.dispatch(decrement())
  }

  setCounter (): void {
    this.store.dispatch(setCounter({ counter: 200 }))
  }

}
