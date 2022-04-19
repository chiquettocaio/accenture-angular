import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormcontrolComponent } from './reactive-formcontrol/reactive-formcontrol.component';
import { ReactiveFormgroupComponent } from './reactive-formgroup/reactive-formgroup.component';
import { ReactiveFormbuilderComponent } from './reactive-formbuilder/reactive-formbuilder.component';
import { ReactiveFormarrayComponent } from './reactive-formarray/reactive-formarray.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormcontrolComponent,
    ReactiveFormgroupComponent,
    ReactiveFormbuilderComponent,
    ReactiveFormarrayComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
