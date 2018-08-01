import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { CustomersComponent } from './customers/customers.component';
import { TrainersComponent } from './trainers/trainers.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent, 
    DashboardComponent,
    MeasurementsComponent,
    CustomersComponent,
    TrainersComponent
  ]
})
export class AdminModule { }
