import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NAVBARComponent implements OnInit {
  UsuarioLogeado : boolean =true;
  usuario : any;
  @Output() public sidenavToggle = new EventEmitter();
  constructor(public router: Router) {
   
          
   }

  ngOnInit() {
      
    if(sessionStorage.getItem('username')!= null){
      this.UsuarioLogeado =true;
        }
        else
        {
         this.UsuarioLogeado=false;
        }
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  cerrarSesion() {
    console.log('helo');
    sessionStorage.clear();
    this.router.navigate(['/login']);
}

enviarAClientes(){
  this.router.navigate(['/clientes']);
}

}
