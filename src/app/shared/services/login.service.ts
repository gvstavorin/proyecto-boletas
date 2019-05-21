import { Injectable } from '@angular/core';
 
@Injectable()
export class LoginService {
 
  constructor() { }
  VerificarUsuarioPassword(usuario: string, pass : string)
  {
         if(usuario == "sistema@s.cl" && pass =="secret"){ 
          sessionStorage.setItem('username',usuario);
             return true;
           }
             else{
                  return false;
                }
  }
 
}