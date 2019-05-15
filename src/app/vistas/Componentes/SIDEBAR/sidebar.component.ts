import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SIDEBARComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
}
