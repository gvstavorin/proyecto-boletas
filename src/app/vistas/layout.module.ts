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
import { NavegadorPrincipalComponent } from './Componentes/navegador-principal/navegador-principal.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth/auth.guard';
@NgModule({
  declarations: [
    NAVBARComponent,
    SIDEBARComponent,
    LayoutComponent,
    NotFoundComponent,
    NavegadorPrincipalComponent   
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    Ng2Rut,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,   
    HttpClientModule,
    
  ],
  providers:[AuthGuard]
})
export class LayoutModule { }
