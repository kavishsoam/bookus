import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatSidenavModule,MatIconModule,MatListModule,MatCardModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatDatepickerModule,MatNativeDateModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './_layout/left-panel/left-panel.component';
import { HomeComponent } from './_module/home/home.component';
import { SalesComponent } from './_module/home/sales/sales.component';
import { LineChartComponent } from './_graph/line-chart/line-chart.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './shared-component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    HomeComponent,
    SalesComponent,
    LineChartComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
