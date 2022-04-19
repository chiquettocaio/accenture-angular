import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-formarray',
  templateUrl: './reactive-formarray.component.html',
  styleUrls: ['./reactive-formarray.component.css']
})
export class ReactiveFormarrayComponent {
  meuFormGroup: FormGroup = this.fb.group({
    nome: ['', [
      Validators.required,

      /* Criação de um validator customizado, que só valida o input se o valor dele for "caio"

        (control: AbstractControl) => {
          if (control.value !== 'caio') {
            return { invalidName: true }
          }

        return null
      } */
    ]],

    idade: ['']
  })


  constructor (private fb: FormBuilder) { }

  submitForm (): void {
    console.log('FORMULÁRIO SUBMETIDO COM SUCESSO!', this.meuFormGroup)
  }

  /* Aqui precisamos necessariamente passar valores para todos os campos do formulário, se não
    o Angular nos devolve um erro */
  mudandoValorComSetValue () {
    this.meuFormGroup.setValue({
      nome: 'Aula de Form',
      idade: ''
    })
  }

  /* Aqui podemos passar valores apenas para os campos que queremos efetivamente modificar */
  mudandoValorComPatchValue () {
    this.meuFormGroup.patchValue({
      nome: 'Aula de Form'
    })
  }
}
