import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { IUserStore } from '../app-store/user/models/user.model';
import { setUser, setUserAge, setUserName, setUserRole } from '../app-store/user/user.action';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user$: Observable<IUserStore> = this.store.select((store: any) => store.user)

  constructor (private store: Store) { }

  updateUserName ({ target }: any): void {
    this.store.dispatch(setUserName({ name: target.value }))
  }

  updateUserAge ({ target }: any): void {
    this.store.dispatch(setUserAge({ age: target.value }))
  }

  updateUserRole ({ target }: any): void {
    this.store.dispatch(setUserRole({ role: target.value }))
  }

  updateUser (): void {
    this.store.dispatch(setUser({
      age: 20,
      name: 'Caio teste',
      role: 'Dev'
    }))
  }
}
