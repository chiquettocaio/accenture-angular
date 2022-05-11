import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppStoreModule } from './app-store/app-store.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';
import { ListFormComponent } from './list-form/list-form.component';
import { ListComponentComponent } from './list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserComponent,
    ListFormComponent,
    ListComponentComponent
  ],

  imports: [
    BrowserModule,
    AppStoreModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
