import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {
  secretToken: string = 'secret_token'
  observable$: Observable<string> = of(this.secretToken)
  observableResponseStatus: number = 0

  constructor() { }

  returnUserSecretToken (): string {
    return this.secretToken
  }

  returnObservable (): Observable<string> {
    return this.observable$
  }

  testObservableInterno (): void {
    this.observable$.subscribe({
      next: res => this.observableResponseStatus = 200,
      error: err => this.observableResponseStatus = 400
    })
  }

  testeRespostasMockadas (): string {
    return 'Batata'
  }
}
