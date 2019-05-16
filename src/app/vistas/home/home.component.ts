import { Component, OnInit } from '@angular/core';
import { FacturacionService } from 'src/app/shared/services/facturacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpFact : FacturacionService) { }

  ngOnInit() {
  }


  factura(data){
    this.httpFact.guardarDTETem(data).subscribe(data=>{console.log(data)}, error=>{console.log(error)})
  }

}
