import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TableComponent } from './table.component';
import { MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../shared-component/modal/modal.component';
import { ProgressBarModule } from '../shared-component/progress-bar/progress-bar.module';

const routes = [
  
  {
    path: '',
    component: TableComponent, // base template component
  }

];
@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
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
