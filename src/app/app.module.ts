import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { FlexLayoutModule } from '@angular/flex-layout';

import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Rut } from 'ng2-rut';

import {AuthGuard} from './shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    
  
    
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2Rut
    
  
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
