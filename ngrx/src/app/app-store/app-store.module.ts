import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter/counter.reducer';
import { userReducer } from './user/user.reducer';
import { listReducer } from './list/list.reducer';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    StoreModule.forRoot({
      count: counterReducer,
      user: userReducer,
      list: listReducer
    })
  ]
})
export class AppStoreModule { }
