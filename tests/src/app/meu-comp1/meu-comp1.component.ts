import { Component } from '@angular/core';

@Component({
  selector: 'meu-comp1',
  templateUrl: './meu-comp1.component.html',
  styleUrls: ['./meu-comp1.component.css']
})
export class MeuComp1Component {
  title: string = 'Título do componente'

  constructor () { }

  verificandoValorRetornado (): string {
    return 'Testes em Angular'
  }

  updateH1Content (): void {
    this.title = 'Título atribuído via botão'
  }
}
