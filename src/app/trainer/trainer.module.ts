import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './trainer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainerRoutingModule } from './trainer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TrainerRoutingModule,
    SharedModule
  ],
  declarations: [
    TrainerComponent, 
    DashboardComponent
  ]
})
export class TrainerModule { }
