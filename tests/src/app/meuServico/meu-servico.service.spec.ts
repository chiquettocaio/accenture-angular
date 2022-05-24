import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { MeuServicoService } from './meu-servico.service';

describe('MeuServicoService', () => {
  let service: MeuServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Variável "secretToken" deve possuir o valor "secret_token"', () => {
    expect(service.secretToken).toEqual('secret_token')
  })

  it('Método "returnUserSecretToken()" deve retornar "secret_token"', () => {
    expect(service.returnUserSecretToken()).toEqual('secret_token')
  })

  it('Método "returnObservable()" (next) deve retornar "secret_token"', () => {
    service.returnObservable().subscribe({
      next: (res: any) => expect(res).toEqual('secret_token')
    })
  })

  it('Verificar se todas as partes do método "testObservableInterno()" estão sendo executadas', () => {
    const valoresMockados = jasmine.createSpy().and.returnValues(
      of(200),
      throwError(400)
    )

    expect(service.observableResponseStatus).toEqual(0)

    service.observable$ = valoresMockados()
    service.testObservableInterno()
    expect(service.observableResponseStatus).toEqual(200)

    service.observable$ = valoresMockados()
    service.testObservableInterno()
    expect(service.observableResponseStatus).toEqual(400)
  })

  // MOCKANDO MULTIPLAS RESPOSTAS PARA UMA FUNÇÃO
  it('Mockando respostas para uma mesma função', () => {
    expect(service.testeRespostasMockadas()).toEqual('Batata')

    const validValues: string[] = ['Angular', 'React', 'Vue', '...']
    service.testeRespostasMockadas = jasmine.createSpy().and.returnValues('Angular', 'React', 'Vue', '...')

    for (const value of validValues) {
      expect(service.testeRespostasMockadas()).toEqual(value)
    }
  })
});
