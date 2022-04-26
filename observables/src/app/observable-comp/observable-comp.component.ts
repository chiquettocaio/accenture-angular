import { Component, OnInit } from '@angular/core';
import { filter, from, last, map, Observable, Observer, of, skip, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'observable-comp',
  templateUrl: './observable-comp.component.html',
  styleUrls: ['./observable-comp.component.css']
})
export class ObservableCompComponent implements OnInit {
  subscriptionGeral: Subscription = new Subscription()
  alvoDoEfeitoColateral: string = ''

  constructor () { }

  ngOnInit(): void {
    /* MATANDO STREAM DE DADOS COM UNSUBSCRIBE() */
    // this.criaObservable().subscribe({
    //   next: res => console.log('RESPOSTA DO OBSERVABLE', res),
    //   error: err => console.error('RESPOSTA DO OBSERVABLE - ERROR', err),
    //   complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    // }).unsubscribe()

    /* MATANDO STREAM DE DADOS COM O OPERADOR TAKE() */
    // this.criaObservable()
    //   .pipe(take(2))
    //   .subscribe({
    //     next: res => console.log('RESPOSTA DO OBSERVABLE', res),
    //     complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    //   })

    /* UTILIZANDO SUBSCRIPTION GERAL PRA MATAR STREAMS DE DADOS */
    // this.subscriptionGeral.add(
    //   this.criaObservable().subscribe({
    //     next: res => console.log('RESPOSTA DO OBSERVABLE 1', res),
    //     complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    //   })
    // )

    // this.subscriptionGeral.add(
    //   this.criaObservable().subscribe({
    //     next: res => console.log('RESPOSTA DO OBSERVABLE 2', res),
    //     complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    //   })
    // )

    // this.subscriptionGeral.unsubscribe()

    /* OPERADOR MAP: MANIPULA O VALOR RETORNADO PELO OBSERVABLE => MANIPULANDO UMA STRING */
    // this.criaObservable()
    //   .pipe(map(res => `${res} qualquer coisa`))
    //   .subscribe({
    //     next: res => console.log('RESPOSTA DO OBSERVABLE', res),
    //     complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    //   })

    /* OPERADOR MAP: MANIPULA O VALOR RETORNADO PELO OBSERVABLE => MANIPULANDO NÚMEROS */
    // this.criaObservable2()
    //   .pipe(map((number: number) => number * 2))
    //   .subscribe({
    //     next: res => console.log('RESPOSTA DO OBSERVABLE', res),
    //     complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    //   })

    /* OPERADOR MAP: MANIPULA O VALOR RETORNADO PELO OBSERVABLE => MANIPULANDO ARRAYS DE NÚMEROS */
    // this.criaObservable3()
    //   .pipe(
    //     map((numbers: number[]) => {
    //       // MAP DO PRÓPRIO ARRAY
    //       return numbers.map(n => n * 2)
    //     })
    //   )
    //   .subscribe({
    //     next: res => console.log('RESPOSTA DO OBSERVABLE', res),
    //     complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    //   })

    /* OBSERVABLE GERADO PELO OPERADOR "OF" DO RXJS */
    // this.criaObservableComOf().subscribe({
    //   next: res => console.log('RESPOSTA DO OBSERVABLE', res),
    //   complete: () => console.warn('O observable se encerrou, nada mais vai chegar aqui')
    // })

    /* OPERADOR TAP: REALIZA EFEITOS COLATERAIS */
    // this.criaObservableComOf()
    //   .pipe(
    //     tap(personData => this.efeitoColateral(personData))
    //   ).subscribe()

    // this.criaObservableComOf()
    //   .pipe(tap(personData => personData.name = 'Caio'))
    //   .subscribe({
    //     next: res => console.log('Resposta', res)
    //   })

    /* OPERADOR SKIP: PULA N RESPOSTAS E SÓ CAI NO SUBSCRIBE A PARTIR DE N */
    // this.criaObservable2()
    //   .pipe(skip(3))
    //   .subscribe({
    //     next: res => console.log('Resposta', res)
    //   })


    this.criaObservableDoAlessandro()
      .pipe(
        // last(),
        map(addressess => addressess.filter((add: any) => add.isBillingAddress))
      )
      .subscribe(addresses => console.log('RESPOSTA', { addresses }))
  }

  efeitoColateral (personData: any): void {
    this.alvoDoEfeitoColateral = personData.name
  }

  criaObservable (): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      // O método next é o cara responsável por emitir um valor
      observer.next('aula de angular')

      // observer.next('segundo retorno teste')

      // Devolve um erro (encerra o observable)
      // observer.error('DEU ERRO AQUI!!!!!')

      // Encerra o observable
      // observer.complete()
    })
  }

  criaObservable2 (): Observable<number> {
    return new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.next(4)
      observer.next(5)
    })
  }

  criaObservable3 (): Observable<number[]> {
    return new Observable((observer: Observer<number[]>) => {
      observer.next([1, 2, 3])
    })
  }

  /* OPERADOR "OF" RETORNA UM OBSERVABLE QUE EMITE OS DADOS QUE PASSAMOS PRA ELE POR PARÂMETRO  */
  criaObservableComOf (): Observable<any> {
    const personData = {
      name: 'John',
      age: 40
    }

    return of(personData)
  }

  criaObservableDoAlessandro (): Observable<any> {
    const addresses = [{
      name: 'Endereço 1',
      isBillingAddress: false
    }, {
      name: 'Endereço 2',
      isBillingAddress: true
    }, {
      name: 'Endereço 3',
      isBillingAddress: true
    }, {
      name: 'Endereço 4',
      isBillingAddress: false
    }]

    return of(addresses)
  }
}
