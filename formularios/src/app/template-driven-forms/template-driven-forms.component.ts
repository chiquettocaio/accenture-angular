import { Component, OnInit } from '@angular/core';

interface DadosDoFormulario {
  name: string
}

@Component({
  selector: 'template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  formData: DadosDoFormulario = {
    name: ''
  }

  constructor() { }

  ngOnInit(): void {

  }
}
