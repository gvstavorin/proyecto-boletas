import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import {ClientesService} from './../../../shared/services/clientes.service';
import {MatTableDataSource, MatDialogRef ,MatDialog,MatDialogConfig} from "@angular/material";
import { MatPaginator } from '@angular/material/paginator'; 
import { PagoClienteComponent } from '../pago-cliente/pago-cliente.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  dataSource: any ;
  @ViewChild(MatPaginator) paginator: MatPaginator;   
  
  displayedColumns: string[] = ['nombre','rut','direccion', 'plan','monto','actions'];
  //dataSource: MatTableDataSource<any>;

  constructor( public router: Router, private httpService: ClientesService, private dialog : MatDialog,

    ) {

  
   }

  ngOnInit() {

 this.rescatarDatos();
            
  }

  applyFilter(filterValue: string) {
   filterValue = filterValue.trim(); // Remove whitespace
   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
   this.dataSource.filter = filterValue;
}

rescatarDatos() {  
  this.httpService.obtenerContratosActivos()  
  .subscribe(datos => {  
    let datosContrato = []
        datos.forEach(element => {
             datosContrato.push({
                nombre : element.cliente.nombre +' '+ element.cliente.apellido,
                direccion : element.direccion,
                rut: element.cliente.rut,
                plan: element.servicio.nombre,
                monto : element.servicio.venta,
                contrato:element
             })
        });       
        

            this.dataSource = new MatTableDataSource();  
             this.dataSource.data=datosContrato;
             this.dataSource.paginator = this.paginator;

             console.log(this.dataSource);
     }); 

} 

facturarRapido(data){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '50%';
  dialogConfig.height = '90%';
  dialogConfig.disableClose = false;
  dialogConfig.data = data;
  const dialogRef = this.dialog.open(PagoClienteComponent, dialogConfig);
 dialogRef.afterClosed().subscribe(
    data => {
     if (data == null) {
       return;
     } 
    }
  );
}

}