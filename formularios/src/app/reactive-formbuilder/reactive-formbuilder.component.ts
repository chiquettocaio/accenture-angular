import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-formbuilder',
  templateUrl: './reactive-formbuilder.component.html',
  styleUrls: ['./reactive-formbuilder.component.css']
})
export class ReactiveFormbuilderComponent implements OnInit {
  // fb: FormBuilder

  meuFormGroup: FormGroup = this.fb.group({
    nome: this.fb.control(''),
    idade:this.fb.control(''),

    formGroupFilho: this.fb.group({
      bairro: this.fb.control('')
    })
  })

  constructor (private fb: FormBuilder) {
    // this.fb = new FormBuilder()
  }

  ngOnInit (): void {}

  imprimeFormulario (): void {
    console.log(this.meuFormGroup)
  }
}
