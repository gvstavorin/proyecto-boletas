

import { Injectable } from '@angular/core';
import { HttpClient,HttpBackend} from '@angular/common/http';
import {ApiURL} from './conexion-ip';
@Injectable({
  providedIn: 'root'
})
export class FacturacionService {


  EmitirTemporal : any;
  EmitirReal:any;
  URL_DTE_PDF_REAL = ApiURL.ApiFacturador+'/dte/dte_emitidos/pdf';
  URL_DTE_TEM  = ApiURL.ApiFacturador+'/dte/documentos/emitir';
  URL_DTE_REAL = ApiURL.ApiFacturador+'/dte/documentos/generar';
  hasher = 't7dr5B1ujphds043WMMEFWwFLeyWYqMU';
  username = 'X'
  

  papelContinuio: Number = 75;
  op = {
    'Authorization': 'Basic ' +btoa(this.hasher+':'+this.username),
    
};

httpPDF = {
  "Accept": "application/pdf",
  'Content-Type': 'application/pdf',
  'Authorization': 'dDdkcjVCMXVqcGhkczA0M1dNTUVGV3dGTGV5V1lxTVU6'
};


  constructor(private http: HttpClient,handler: HttpBackend) { 
    this.http = new HttpClient(handler);

  }

  guardarDTETem(DatosCuenta,DatosCliente) {
 DatosCliente.contrato.cliente.rut = DatosCliente.contrato.cliente.rut.replace(/\./g,'');
//Array DTE
    const Array_Dte ={
   Encabezado :{
     IdDoc   : {
            TipoDTE: DatosCuenta.tipoDte,
            MntBruto: (DatosCuenta.tipoDte == 33 ) ? true : false
     },
     Emisor  : {
            RUTEmisor:'76835662-9',
     },
     Receptor: {
             RUTRecep: DatosCliente.contrato.cliente.rut,
             RznSocRecep:DatosCliente.contrato.cliente.nombre +' '+ DatosCliente.contrato.cliente.apellido,
             GiroRecep: 'PARTICULAR',
             DirRecep:DatosCliente.contrato.cliente.direccion,
             CmnaRecep:'COLINA'

            }       
   },
   Detalle:{
         NmbItem: DatosCliente.contrato.servicio.nombre,
         QtyItem:'1',
         PrcItem:DatosCuenta.precioProducto,
         DescuentoMonto: DatosCuenta.descuento,
   }

  }
 return this.http.post(this.URL_DTE_TEM,Array_Dte, {headers : this.op});
}

  guardarDteReal(DTErespuesta){ 

   return this.http.post(this.URL_DTE_REAL,DTErespuesta, {headers : this.op});
  }
  GenerarPDFReal(DTEreal,TipoDoc){
const opciones =`?papelContinuo=${TipoDoc}&copias_tributarias=1&copias_cedibles1=&cedibles=1`

  return  this.http.get(this.URL_DTE_PDF_REAL+'/'+
    DTEreal.dte+'/'+
    DTEreal.folio+'/'+
    DTEreal.emisor+opciones,{headers : this.httpPDF,responseType: "blob"}).subscribe(res => {
      const blob = new window.Blob([res], { type:  'application/pdf' });
      const blobUrl = URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = blobUrl;
      document.body.appendChild(iframe);
      iframe.contentWindow.print();
    });


  }



}