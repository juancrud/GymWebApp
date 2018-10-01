import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerComponent,
    DashboardComponent
  ]
})
export class CustomerModule { }
