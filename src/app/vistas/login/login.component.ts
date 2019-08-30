import { Router } from '@angular/router';
import { LoginService } from './../../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/model/usuarios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  loading: boolean;
  hide = true;
  formUsuario : FormGroup;
  usuario : Usuario
  Empresas: any[] = [
  
    {id: '1', nombre: 'Club RED'},
    {id: '2', nombre: 'LanProject SPA'},

  ];
  constructor(private service : LoginService , private routes: Router,private _formBuilder: FormBuilder) { 

    this.usuario = new Usuario();
    if(sessionStorage.getItem('username')!= null){
      this.routes.navigate(['/home']);
        }
      


  } 
    
  ngOnInit() {
    this.formUsuario = this._formBuilder.group({
      usuario:['', [Validators.required]],
     password:['',[Validators.required]],
     empresa:['',]
  });
  }


  IniciarSesion(){
    this.usuario.username = this.formUsuario.controls['usuario'].value;
    this.usuario.password = this.formUsuario.controls['password'].value;

   
   this.service.Login(this.usuario).subscribe(response=>{
     
     this.service.GuardarUsuario(response.access_token);
     this.service.GuardarToken(response.access_token);
      let  Usuario = this.service.usuario;
     this.routes.navigate(['/clientes']);
     Swal.fire('', `Hola ${Usuario.username}`, 'success')
    },error=>{
      if(error.status ==400){
        Swal.fire('Error Login', `Usuario o clase incorrectas!`, 'error')

      }
    })
  }
 
}