import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [ 
    
    { path: '', loadChildren: './vistas/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './vistas/login/login.module#LoginModule' },
   
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
