import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Clientes} from './../model/clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    
   };
  _URL = 'http://192.168.88.45/aerp/clientes';
  constructor(private http : HttpClient) { }



  public obtenerClientes():Observable<Clientes[]> {
      
    return this.http.get<Clientes[]>(this._URL, {headers : this.httpOptions});
    
  }
}
