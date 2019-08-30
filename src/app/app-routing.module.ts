import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [ 
    
    { path: '', canActivate:[AuthGuard],loadChildren: './vistas/layout.module#LayoutModule'},
    { path: 'login', loadChildren: './vistas/login/login.module#LoginModule' },
   
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
