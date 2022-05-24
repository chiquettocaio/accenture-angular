import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MeuComp1Component } from './meu-comp1.component';

describe('MeuComp1Component', () => {
  let component: MeuComp1Component;
  let fixture: ComponentFixture<MeuComp1Component>;
  let debug: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuComp1Component ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuComp1Component);
    component = fixture.componentInstance;
    debug = fixture.debugElement

    fixture.detectChanges();
  });

  it('should create meuComp1', () => {
    expect(component).toBeTruthy();
  });

  it('Propriedade "title" deve ter o valor "Título do componente"', () => {
    expect(component.title).toEqual('Título do componente')
  })

  it('Método "verificandoValorRetornado" dedve retornar "Testes em Angular"', () => {
    expect(component.verificandoValorRetornado()).toEqual('Testes em Angular')
  })

  // Não é indicado utilizar o querySelector para fazer query de HTML
  it('h1 deve ser renderizado com o conteúdo "Título do componente"', () => {
    const h1Element = document.querySelector('h1.title')
    expect(h1Element?.textContent?.trim()).toEqual('Título do componente')
  })

  // By.css é o mais indicado pois é multiplataforma, enquanto querySelector existe só no browser
  it('h1 deve ser renderizado com o conteúdo "Título do componente" (BY.CSS)', () => {
    const h1Element = debug.query(By.css('h1.title'))
    expect(h1Element.nativeElement.textContent.trim()).toEqual('Título do componente')
  })

  it('Button chamando método "updateH1Content" no clique', () => {
    const spy = spyOn(component, 'updateH1Content').and.callThrough()

    const h1Element = debug.query(By.css('.title'))
    const button = debug.query(By.css('.toggle-btn'))

    expect(h1Element.nativeElement.textContent.trim()).toEqual('Título do componente')

    button.nativeElement.click()
    fixture.detectChanges()

    expect(spy).toHaveBeenCalled()
    expect(component.title).toEqual('Título atribuído via botão')
    expect(h1Element.nativeElement.textContent.trim()).toEqual('Título atribuído via botão')
  })
});
