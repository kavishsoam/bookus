import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TableComponent } from './table.component';
import { MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';

const routes = [
  
  {
    path: '',
    component: TableComponent, // base template component
  }

];
@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  declarations: [
    TableComponent
],
})
export class TableModule { }
