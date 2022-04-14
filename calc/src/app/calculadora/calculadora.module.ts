import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './calculadora.component';
import { VisorComponent } from './components/visor/visor.component';
import { CalcButtonComponent } from './components/calc-button/calc-button.component';


@NgModule({
  declarations: [
    CalculadoraComponent,
    VisorComponent,
    CalcButtonComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
