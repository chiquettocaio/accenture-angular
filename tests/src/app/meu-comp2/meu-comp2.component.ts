import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'meu-comp2',
  templateUrl: './meu-comp2.component.html',
  styleUrls: ['./meu-comp2.component.css']
})
export class MeuComp2Component {
  myFormGroup: FormGroup = this.fb.group({
    tech: ['']
  })

  constructor(private fb: FormBuilder) { }
}
