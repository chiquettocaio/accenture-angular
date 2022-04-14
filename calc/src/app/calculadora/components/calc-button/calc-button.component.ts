import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.css']
})
export class CalcButtonComponent implements OnInit {
  @Input() buttonValue: string = ''
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked (): void {
    this.clicked.emit(this.buttonValue)
  }
}
