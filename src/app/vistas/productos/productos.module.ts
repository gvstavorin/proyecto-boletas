import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductosRoutingModule} from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import {PageHeaderModule} from './../Componentes/page-header/page-header.module';

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    PageHeaderModule
    
  ]
})
export class ProductosModule { }
