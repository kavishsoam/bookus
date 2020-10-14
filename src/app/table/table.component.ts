import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';



export interface PeriodicElement {
  name: string;
  dateAdded: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Fresha', dateAdded: 'Monday, 1 Feb 2020', status:'Active'},
  {name: 'Book Now Link', dateAdded: 'Tuesday, 22 Feb 2020', status:'Active'},
  {name: 'Facebook', dateAdded: 'wednesday, 4 Mar 2020', status:'Active'},
  {name: 'Instagram', dateAdded: 'Thursday, 18 Apr 2020', status:'Active'},
  {name: 'Imported', dateAdded: 'Friday,  1 Aug 2020', status:'Active'},
  {name: 'Walkin', dateAdded: 'Saturday, 6 Oct 2020', status:'Active'},
 
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  

  displayedColumns: string[] = ['name', 'dateAdded', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
