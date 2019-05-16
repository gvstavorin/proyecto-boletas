import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  URL_FACT  = 'http://143.255.178.6';
  hasher = 't7dr5B1ujphds043WMMEFWwFLeyWYqMU';
  op = {
    'Authorization': 'dDdkcjVCMXVqcGhkczA0M1dNTUVGV3dGTGV5V1lxTVU6'
};

   
  constructor(private http: HttpClient) { }

  guardarDTETem(data) {


    return this.http.post(this.URL_FACT+'/libredte/api/dte/documentos/emitir',this.hasher);

  }

}
