import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpModule } from '../../../node_modules/@angular/http';
import { TrainerService } from './services/trainer.service';
import { MeasurementService } from './services/measurement.service';
import { CustomerService } from './services/customer.service';
import { ExerciseCategoryService } from './services/exercise-category.service';
import { ExerciseService } from './services/exercise.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent
  ],
  exports:[
    RouterModule,
    HeaderComponent, 
    FooterComponent,
    SidebarComponent
  ],
  providers: [
    TrainerService,
    MeasurementService,
    CustomerService,
    ExerciseCategoryService,
    ExerciseService
  ]
})
export class CoreModule { }
