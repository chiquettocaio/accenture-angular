import { Component, Input, OnInit } from '@angular/core';
import { InterfaceFormulario } from '../formulario/models/formulario.model';

@Component({
  selector: 'listagem-dados',
  templateUrl: './listagem-dados.component.html',
  styleUrls: ['./listagem-dados.component.css']
})
export class ListagemDadosComponent {
  @Input() dadosDaRequisicao: InterfaceFormulario = {
    nome: '',
    idade: ''
  }

  constructor() { }
}
