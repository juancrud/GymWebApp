import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { CustomersComponent } from './customers/customers.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainerEditComponent } from './trainer-edit/trainer-edit.component';
import { MeasurementEditComponent } from './measurement-edit/measurement-edit.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

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
    TrainersComponent,
    TrainerEditComponent,
    MeasurementEditComponent,
    CustomerEditComponent
  ],
  providers: [
  ]
})
export class AdminModule { }
