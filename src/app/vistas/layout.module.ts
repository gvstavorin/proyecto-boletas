import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { NAVBARComponent } from './Componentes/NAVBAR/navbar.component';
import { SIDEBARComponent } from './Componentes/SIDEBAR/sidebar.component';
import { MaterialModule } from '../material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from '../errores/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Rut } from 'ng2-rut';
import {LayoutComponent} from './layout.component';
@NgModule({
  declarations: [
    NAVBARComponent,
    SIDEBARComponent,
    LayoutComponent,
    NotFoundComponent
    
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    Ng2Rut,
    FormsModule, ReactiveFormsModule,
    
    FlexLayoutModule,
    
    HttpClientModule
  ]
})
export class LayoutModule { }
