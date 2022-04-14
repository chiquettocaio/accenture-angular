import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {
  @Input() value: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
