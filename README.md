## Aula 1 - Calculadora
- Criação do projeto pelo CLI
- Criação de componentes e módulos pelo CLI
- Introdução aos módulos e componentes
- Utilização do *ngFor para criação de vários botões
- Adição de eventos nos elementos com os parênteses (click)
- Emissão de eventos customizados com o @Output()
- Passagem de valores para dentro dos componentes com as @Input() properties
- Utilização do *ngIf
- Utilização do **else** com o **ng-template** e **template variables** (#meuTemplate)
- Utilização e casos de uso do **ng-container**

![Animation](https://user-images.githubusercontent.com/34581188/163294037-c313914f-e49a-4b29-b2a7-b3bfee3d0f14.gif)

## Aula 2 - Formulários
- Rápida passagem pelos template driven forms (https://angular.io/guide/forms)
- Estudo dos ReactiveForms
  - Utilização de **FormControls**
  - Utilização de **FormGroups**, com as notações de instanciação e array
  - Explicação sobre o funcionamento da injeção de dependência, e o que ela faz por baixo dos panos
  - Utilização do FormBuilder através da _injeção de dependência_
  - Utilização do **(ngSubmit)**
  - Utilização de **validators**
  - Criação de validators customizados
  - Explicação e uso do **setValue({})**
  - Explicação e uso do **patchValue({})**
  - Estudo da metodologia adotada para criação de formulários no nosso atual projeto

## Aula 3 - Observables
- O que são Observables
- O que é RxJS
- Como os observables funcionam
- Estrutura de um Observable
  - Uso do Observer
- Método subscribe()
  - next(), error() e complete()
  - Por quê se inscrever?
  - Async pipe
- Unsubscribe()
  - A importância de se desinscrever
  - unsubscribe()
  - Operador take()
  - Subscription geral para desinscrição em massa - subscription.add()
  - Async pipe
- Operadores RxJS
  - take
  - of
  - map
  - filter
  - tap
  - skip
- Método pipe() do Observable
  - Criação de receipts

## Aula 4 - Resumo do que foi visto nas 3 primeiras aulas
- Utilização de Observables
- Requisições HTTP
- Criação e utilização de classe de serviço
- Utilização de formulários
- Utilização de conceitos básicos do Angular para estabelecer uma comunicação entre componentes

![a](https://user-images.githubusercontent.com/34581188/166590464-91906729-2c59-4091-b20a-14050f9acbda.gif)

## Aula 5 - NgRX
- O que é NgRX
- Como utilizar o NgRX
- Actions
- Reducers
- Selectors
- Manipulação de dados da store
- Utilização da dados da store nos componentes

![a](https://user-images.githubusercontent.com/34581188/167744440-10871f79-8193-41de-88e9-88adee4e4cdf.gif)

## Aula 6 - Testes unitários
- O que é Jasmine e Karma Test Runner
- Como funcionam os testes no Angular
- Code coverage
- Testes de componentes
- Testes de services
- Verificação de valor de atributo
- Verificação de valor retornado por método
- Verificação de conteúdo renderizado no HTML
  - QuerySelector
  - By.css()
- Simulação de clique de botão
- Simulação do change de um input (formulário está sendo atualizado?)
- Verificação sobre uma função (foi chamada?)
- Mocks de métodos
- Mockando vários retornos para uma mesma função
- Mockando um serviço inteiro (injeção de dependência)
- Testando a resposta de um observable
- Testando o error de um observable
- Como passar pelas branchs de um observable
- Teste de integração entre um componente e um serviço.
