import { Component, OnInit } from '@angular/core';
import { MeuServicoService } from '../meuServico/meu-servico.service';

@Component({
  selector: 'meu-comp3',
  templateUrl: './meu-comp3.component.html',
  styleUrls: ['./meu-comp3.component.css']
})
export class MeuComp3Component {
  constructor (private meuServico: MeuServicoService) { }

  getUserToken (): string {
    return this.meuServico.returnUserSecretToken()
  }
}
