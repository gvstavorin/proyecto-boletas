import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderComponent} from './page-header.component';
import {MaterialModule} from  './../../../material/material.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[PageHeaderComponent]
})
export class PageHeaderModule { }
