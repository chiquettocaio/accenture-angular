import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-formgroup',
  templateUrl: './reactive-formgroup.component.html',
  styleUrls: ['./reactive-formgroup.component.css']
})
export class ReactiveFormgroupComponent implements OnInit {
  meuFormGroup: FormGroup = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),

    formGroupFilho: new FormGroup({
      bairro: new FormControl('')
    })
  })


  constructor() { }

  ngOnInit(): void {
    console.log('INIT', this.meuFormGroup)
  }

  imprimeFormulario (): void {
    console.log(this.meuFormGroup)
  }
}
