import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuComp1Component } from './meu-comp1/meu-comp1.component';
import { MeuComp2Component } from './meu-comp2/meu-comp2.component';
import { MeuComp3Component } from './meu-comp3/meu-comp3.component';
import { MeuServicoService } from './meuServico/meu-servico.service';

@NgModule({
  declarations: [
    AppComponent,
    MeuComp1Component,
    MeuComp2Component,
    MeuComp3Component
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
