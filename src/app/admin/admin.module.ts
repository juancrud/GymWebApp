import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { CustomersComponent } from './customers/customers.component';
import { TrainersComponent } from './trainers/trainers.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import { MeasurementSaveComponent } from './measurement-save/measurement-save.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { TrainerSaveComponent } from './trainer-save/trainer-save.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent, 
    DashboardComponent,
    MeasurementsComponent,
    CustomersComponent,
    TrainersComponent,
    CustomerSaveComponent,
    MeasurementSaveComponent,
    TrainerSaveComponent
  ],
  providers: [
  ]
})
export class AdminModule { }
