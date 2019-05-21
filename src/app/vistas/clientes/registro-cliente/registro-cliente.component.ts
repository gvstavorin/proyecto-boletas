import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {RutValidator,RutPipe } from 'ng2-rut';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  formIngresoClientes: FormGroup;

  constructor(public router: Router,private fb: FormBuilder, rutValidator: RutValidator) {
    this.formIngresoClientes = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      rut: ['',[ Validators.required,rutValidator]],
      email: ["", Validators.required],
      telefono: ["", Validators.required],
      fax: ["",],
      direccion: [ "", [
           Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255)
        ]
      ]
    });

   }

  ngOnInit() {
   
  }




  
  ingresarCliente(){
    console.log(this.formIngresoClientes.value);
    console.log('cliente ingresado');
  }

}
