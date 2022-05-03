import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDadosComponent } from './listagem-dados.component';

describe('ListagemDadosComponent', () => {
  let component: ListagemDadosComponent;
  let fixture: ComponentFixture<ListagemDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
