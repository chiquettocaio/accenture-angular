import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-formcontrol',
  templateUrl: './reactive-formcontrol.component.html',
  styleUrls: ['./reactive-formcontrol.component.css']
})
export class ReactiveFormcontrolComponent implements OnInit {
  nameFormControl: FormControl = new FormControl('')

  constructor() { }

  ngOnInit (): void {
    this.nameFormControl.setValue('CURSO DE ANGULAR')
  }
}
