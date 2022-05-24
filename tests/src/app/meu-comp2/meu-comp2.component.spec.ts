import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MeuComp2Component } from './meu-comp2.component';

describe('MeuComp2Component', () => {
  let component: MeuComp2Component;
  let fixture: ComponentFixture<MeuComp2Component>;
  let debug: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuComp2Component ],

      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuComp2Component);
    component = fixture.componentInstance;
    debug = fixture.debugElement

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input está atualizando o "values" do "myFormGroup', () => {
    const h1Element = debug.query(By.css('input#tech'))

    h1Element.nativeElement.value = 'Angular'
    h1Element.nativeElement.dispatchEvent(new Event('input'))
    expect(component.myFormGroup.value.tech).toEqual('Angular')
  })
});
