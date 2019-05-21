import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapasComponent } from './mapas.component';

const routes: Routes = [
  {path:'', component:MapasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
