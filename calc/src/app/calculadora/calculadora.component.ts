import { Component, OnInit } from '@angular/core';


/*
  DESAFIOS:
  1. Fazer a conta utilizando o botão de ponto "."
    - Só pode existir um ponto por sentença
    - Utilizar algum pipe do Angular ou então alguma função do JS para evitar números decimais muito grandes
  2. Utilizar algum pipe no visor para formatar os números enquanto eles são digitados (1.000, 10.000, etc)
  3. Se quiser, implementar um botão de "clear" para limpar toda a sentença */

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  buttonLabels: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', '*',
  ]

  mathSentence: any[] = ['0', '']
  mathOperator: string = ''

  constructor () { }

  ngOnInit (): void {}

  buttonClicked (buttonValue: any): void {
    const isOperator = /[\+\-\/\*]/.test(buttonValue)
    const isEqualSymbol = buttonValue === '='

    if (isOperator) {
      this.setOperator(buttonValue)
    } else {
      if (this.mathSentence[0] === '0') {
        this.mathSentence[0] = buttonValue
      } else {
        if (isEqualSymbol) {
          this.doArithmetic()
        } else {
          this.setSentenceWithNumber(buttonValue)
        }
      }
    }
  }

  setOperator (buttonValue: string): void {
    this.mathOperator = buttonValue
  }

  setSentenceWithNumber (buttonValue: string): void {
    const hasAnyOperator: boolean = Boolean(this.mathOperator)
    const sentencePosition = hasAnyOperator ? 1 : 0
    this.mathSentence[sentencePosition] += buttonValue
  }

  doArithmetic (): void {
    if (this.mathOperator === '+') {
      this.mathSentence[0] = Number(this.mathSentence[0]) + Number(this.mathSentence[1])
    } else if (this.mathOperator === '-') {
      this.mathSentence[0] = Number(this.mathSentence[0]) - Number(this.mathSentence[1])
    } else if (this.mathOperator === '/') {
      this.mathSentence[0] = Number(this.mathSentence[0]) / Number(this.mathSentence[1])
    } else if (this.mathOperator === '*') {
      this.mathSentence[0] = Number(this.mathSentence[0]) * Number(this.mathSentence[1])
    }

    this.mathSentence[1] = ''
    this.mathOperator = ''
  }

  getVisorSentence (): string {
    return `${this.mathSentence[0]} ${this.mathOperator} ${this.mathSentence[1]}`
  }
}
