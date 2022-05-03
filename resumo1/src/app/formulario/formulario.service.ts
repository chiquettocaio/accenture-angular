import { Injectable } from '@angular/core';
import { InterfaceFormulario } from './models/formulario.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  constructor (private http: HttpClient) { }

  fazerRequisicaoHTTP (dadosDoForm: InterfaceFormulario): Observable<Object> {
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.post(URL, dadosDoForm, {})
  }
}
