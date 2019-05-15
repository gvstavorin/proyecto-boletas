import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardsComponent } from '../Componentes/cards/cards.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
