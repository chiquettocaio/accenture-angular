import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeuServicoService } from '../meuServico/meu-servico.service';

import { MeuComp3Component } from './meu-comp3.component';

class MockMeuServico {
  returnUserSecretToken = jasmine.createSpy().and.returnValue('ANGULAAAAAAER')
}

describe('MeuComp3Component', () => {
  let component: MeuComp3Component;
  let fixture: ComponentFixture<MeuComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuComp3Component ],

      providers: [{
        provide: MeuServicoService,
        useClass: MockMeuServico
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testando valor mockado de "returnUserSecretToken"', () => {
    const meuServicoInject = TestBed.inject(MeuServicoService)
    expect(meuServicoInject.returnUserSecretToken()).toEqual('ANGULAAAAAAER')
  });
});
