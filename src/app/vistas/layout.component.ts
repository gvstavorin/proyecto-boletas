import { Component,Output, EventEmitter,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



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




  constructor(private breakpointObserver: BreakpointObserver,public route: Router) {


  }
  ngOnInit() {
    this.MenuMostrar = true;
    if(sessionStorage.getItem('username')!= null){
      this.UsuarioLogeado =true;
        }
        else
        {
         this.UsuarioLogeado=false;
        }

   
}
cerrarSesion() {
  console.log('helo');
  sessionStorage.clear();
  this.route.navigate(['/login']);
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
