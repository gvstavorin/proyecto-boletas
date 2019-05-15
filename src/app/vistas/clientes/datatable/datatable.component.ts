import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor( private router: Router
    ) {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

   }

  ngOnInit() {
  }

}
