import { Component } from '@angular/core';
import { InterfaceFormulario } from './formulario/models/formulario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadosRecebidosDoComponenteDeFormulario: InterfaceFormulario = {
    nome: '',
    idade: ''
  }

  tratarDadosDaRequisicao (dadosDaRequisicao: InterfaceFormulario): void {
    this.dadosRecebidosDoComponenteDeFormulario = dadosDaRequisicao
  }
}
