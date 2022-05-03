import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormularioComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }
