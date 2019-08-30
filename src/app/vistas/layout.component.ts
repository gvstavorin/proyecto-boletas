import { Component,Output, EventEmitter,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { LoginService } from '../shared/services/login.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
   MenuMostrar :any;
   UsuarioLogeado : boolean =true;
   usuario : any;

   @Output() collapsedEvent = new EventEmitter<boolean>();




  constructor(private breakpointObserver: BreakpointObserver,public route: Router,public AuthService:LoginService) {


  }
  ngOnInit() {
    this.MenuMostrar = true;
   

   
}
cerrarSesion() {
  Swal.fire({
    title: 'Desea continuar?',
    text: "Al continuar se cerrara la sesion!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Continuar!'
  }).then((result) => {
    if (result.value) {
      let  Usuario = this.AuthService.usuario;
      this.AuthService.logout();
      this.route.navigate(['/login']);
    
      Swal.fire(
        'Adios!',
        `Regresa pronto  ${Usuario.username}`,
        'success'
      )
    }
  })
 
}

  MostrarMenu(){
   this.MenuMostrar  =true;
}
  EsconderMenu(){
    this.MenuMostrar  =false;
  }

  ToggleMenu(){
    this.MenuMostrar = !this.MenuMostrar;
    this.collapsedEvent.emit(this.MenuMostrar);

  }
}
