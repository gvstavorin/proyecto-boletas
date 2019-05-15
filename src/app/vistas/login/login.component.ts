import { RouterModule , Router } from '@angular/router';
import { LoginService } from './../../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loading: boolean;
 
  constructor(private service : LoginService , private routes: Router) { 

    if(sessionStorage.getItem('username')!= null){
      this.routes.navigate(['/home']);
        }
      


  }
msg;
  ngOnInit() {
  }
  check(usuario: string, pass : string)
  
  {
    this.loading = true;
    var output = this.service.VerificarUsuarioPassword(usuario, pass);
    if(output == true)
    {
      this.loading = false;
      this.routes.navigate(['/home']);
     
    }
    else{
      Swal.fire('Oops...', 'Usuario incorrecto!', 'error')
      this.loading = false;

    }
  }
 
}