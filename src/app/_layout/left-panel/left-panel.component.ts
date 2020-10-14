import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material'

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css'],
  providers: [MatSidenav]
})
export class LeftPanelComponent implements OnInit {

  @Output() opened = new EventEmitter;
  isExpanded:boolean = true;

  navs = [
    {title:'Home', icon:'home', path:'javascript:;'},
    {title:'Table', icon:'home', path:'/table'},
    {title:'Calendar', icon:'calendar_today',path:'javascript:;'},
    {title:'Sales', icon:'attach_money', path:'javascript:;'},
    {title:'Client', icon:'home_repair_service', path:'javascript:;'},
    {title:'Staff', icon:'event_seat', path:'javascript:;'},
    {title:'Services', icon:'brightness_7', path:'javascript:;'},
    {title:'Analytiics', icon:'bar_chart', path:'javascript:;'},
    {title:'Setup', icon:'api', path:'javascript:;'},
  ]

  constructor() { }

  ngOnInit() {}

  toggleSideNav() {
    this.isExpanded = !this.isExpanded;
    this.opened.emit(this.isExpanded)
  }

}
