import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import {ClientesService} from './../../../shared/services/clientes.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import {Clientes} from './../../../shared/model/clientes'
import { MatPaginator } from '@angular/material/paginator'; 
import Swal from "sweetalert2";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  dataSource: any ;
  @ViewChild(MatPaginator) paginator: MatPaginator;   

  displayedColumns: string[] = ['nombre', 'apellido', 'rut', 'domicilio','comuna','actions'];
  //dataSource: MatTableDataSource<any>;

  constructor( public router: Router, private httpService: ClientesService
    ) {

  
   }

  ngOnInit() {

  this.httpService.obtenerClientes()  
  .subscribe(datos => {  
            this.dataSource = new MatTableDataSource();  
             this.dataSource.data=datos['data'];
             this.dataSource.paginator = this.paginator;

             console.log(this.dataSource);
     },  
    error => {  
               console.log('There was an error while retrieving Usuarios!' + error);  
             }); 

            
  }

  applyFilter(filterValue: string) {
   filterValue = filterValue.trim(); // Remove whitespace
   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
   this.dataSource.filter = filterValue;
}

renderDataTable() {  
  
} 
}
