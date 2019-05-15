import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    constructor(private _location: Location ) {}

    ngOnInit() {}
    backClicked() {
        this._location.back();
      }
}
