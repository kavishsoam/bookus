import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './_module/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },

    {
    path: "dashboard",
    loadChildren: "./dashboard-new/dashboard-new.module#DashboardNewModule",
  },
  {
    path: "table",
    loadChildren: "./table/table.module#TableModule",
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
