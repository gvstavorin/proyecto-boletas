import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import {ClientesService} from './../../../shared/services/clientes.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import {Clientes} from './../../../shared/model/clientes'
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  tableColumns  :  string[] = ['Nombres', 'Apellidos', 'Domicilio', 'Rut','Ciudad'];
  datosClientes  : any;


  constructor( private router: Router, private httpService: ClientesService
    ) {

    
   }

  ngOnInit() {

this.renderDataTable(); 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.datosClientes.filter = filterValue;
}

renderDataTable() {  
  this.httpService.obtenerClientes()  
    .subscribe(datos => {  
               this.datosClientes = new MatTableDataSource();  
               this.datosClientes.data = datos['data'];  
               console.log(this.datosClientes.data);
       },  
      error => {  
                 console.log('There was an error while retrieving Usuarios!' + error);  
               });  
} 
}
