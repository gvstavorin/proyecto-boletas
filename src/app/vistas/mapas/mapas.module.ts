import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasRoutingModule } from './mapas-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { PageHeaderModule } from '../Componentes/page-header/page-header.module';
import { MapasComponent } from './mapas.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapasComponent],
  imports: [
    CommonModule,
    MapasRoutingModule,
    MaterialModule,
    PageHeaderModule,
    LeafletModule.forRoot()

  ]
})
export class MapasModule { }
