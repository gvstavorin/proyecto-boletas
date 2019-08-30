import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Clientes} from './../model/clientes';
import { Observable, throwError } from 'rxjs';
import {ApiURL} from './conexion-ip'
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  httpOptions = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    
   };
  constructor(private http : HttpClient,private router:Router) { }
  private isNoAutorizado(e):boolean{
  if(e.status==401 || e.status ==403){
    this.router.navigate(['/login'])
             return true;
  }
  return false;
 }


  public obtenerClientes():Observable<any> {
      
    return this.http.get<any>(ApiURL.ApiErp+'/clientes');
  // .pipe(
  //   catchError(e=> {
  //     this.isNoAutorizado(e)
  //     return throwError(e)
  //   })
  // );
    
  }
  public obtenerContratosActivos():Observable<any> {
      
    return this.http.get<any>(ApiURL.ApiErp+'/contratos-activos');
  // .pipe(
  //   catchError(e=> {
  //     this.isNoAutorizado(e) 
  //     return throwError(e)
  //   })
  // );
    
  }

}
