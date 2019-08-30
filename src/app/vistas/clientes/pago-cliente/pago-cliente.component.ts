
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import Swal from 'sweetalert2';
import { FacturacionService } from 'src/app/shared/services/facturacion.service';

@Component({
  selector: 'app-pago-cliente',
  templateUrl: './pago-cliente.component.html',
  styleUrls: ['./pago-cliente.component.css']
})
export class PagoClienteComponent implements OnInit {
  cuentaApagar : any;
  formEstadoCuentaTotal : FormGroup;
  DteTemporal : any;
  DteReal:any
  metodoPago:any;
  TotalAPagarTotal:any;
  formFormadepago : FormGroup;
  TipoDocumento: any;
  
  tipo_Pago: any[] = [
  
    {id: '1', tipo: 'Efectivo'},
    {id: '2', tipo: 'Transferencia'},
    {id: '3', tipo: 'Cheque'},
    {id: '4', tipo: 'Tarjeta'}
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public datosCuenta: any,
  private dialog: MatDialog,
  private dialogRef: MatDialogRef<PagoClienteComponent>,
  private _formBuilder: FormBuilder,
  private factService: FacturacionService) { 
    this.cuentaApagar = datosCuenta;
  }

  ngOnInit() {
  this.formulariosPagos();
  
 
  }

  onClose() {
    this.dialogRef.close();
  }



formulariosPagos(){
  this.formEstadoCuentaTotal = this._formBuilder.group({
    tipoDte:['', [Validators.required]],
    formaDePago: ["Efectivo", [Validators.required]],
    estado:[true, [Validators.required]],
    descuento:["0",Validators.pattern("^[0-9]*$")],   
    precioProducto:[this.datosCuenta.monto],
    descuentoTotal:["0"],
    total:['0'],
    folioDte:[''],
});


}
calcularTotal(){
  return(this.TotalAPagarTotal = (this.formEstadoCuentaTotal.value.precioProducto - this.formEstadoCuentaTotal.value.descuento));
     
 }

 elegirDocumento(){
  Swal.fire({
    title: 'Seleccionar tipo de documento',
    input: 'select',
    inputOptions: {
      Formal: 'Formal',
      Informal: 'Informal',
  
    },
    inputPlaceholder: 'Elegir documento',
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === 'Informal') {
          this.TipoDocumento = '75'
          this.pagoClienteTotal()
        } 
        if (value === 'Formal') {
          this.TipoDocumento = '0'
          this.pagoClienteTotal()
        } 
      })
    }
  })
  

 }

 pagoClienteTotal(){
 var datosTest;

  var  rescatarTotal = this.TotalAPagarTotal;
  this.formEstadoCuentaTotal.controls['total'].setValue(rescatarTotal);
  var   totalFormateado = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'CLP' }).format(rescatarTotal)
    
  if(this.formEstadoCuentaTotal.controls['descuento'].value==null)
  {
    this.formEstadoCuentaTotal.controls['descuento'].setValue("0");
  }

 if(this.TotalAPagarTotal<0)
 {
  Swal.fire("Error", "EL DESCUENTO SUPER AL MONTO", "error");
  return;
 }


 console.log(this.TipoDocumento)
 Swal.fire({
     
     title: "¿Estás seguro?",
     html:
     'Al continuar se generará el pago con un total de : <br/> ' +
     `<b style="font-size:36px"> ${totalFormateado }$</b>`,
     type: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     cancelButtonText: "Cancelar",
     confirmButtonText: "Sí, continuar."
   }).then(result => {
     if (result.value) {


      this.factService.guardarDTETem(this.formEstadoCuentaTotal.value,this.datosCuenta).subscribe(
        data=>{ this.DteTemporal = data;
            this.factService.guardarDteReal(this.DteTemporal).subscribe(data=>{
              const DteRespuestaReal = data;
              this.DteReal = data;
              this.factService.GenerarPDFReal(this.DteReal,this.TipoDocumento)
              Swal.fire('', `Pago Completado`, 'success')

              
            })  
           
        },error=>{
          console.log(error);
        }
      );


   
    }
   });
  
  }

}
