import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { FormularioService } from './formulario.service';
import { InterfaceFormulario } from './models/formulario.model';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() requisicaoBemSucedida = new EventEmitter();

  botaoSubmitClicado: boolean = false

  meuFormulario: FormGroup = this.fb.group({
    nome: [''],
    idade: ['']
  })

  constructor (
    private fb: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit(): void {

  }

  submitForm () : void {
    this.botaoSubmitClicado = true

    const { nome, idade } = this.meuFormulario.value

    const data: InterfaceFormulario = { nome, idade }

    this.formularioService.fazerRequisicaoHTTP(data)
      .pipe(take(1))
      .subscribe({
        next: res => {
          this.botaoSubmitClicado = false

          const { nome, idade } = res as InterfaceFormulario
          const dadosRecebidos: InterfaceFormulario = { nome, idade }

          this.requisicaoBemSucedida.emit(dadosRecebidos)
      },

      error: err => {
        console.error('FUJAM PARA AS COLINAS, ALGO DEU ERRADO!!!', err)
        this.botaoSubmitClicado = false
      }
    })
  }
}
