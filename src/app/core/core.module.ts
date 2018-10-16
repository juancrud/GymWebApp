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
import { LoginComponent } from './login/login.component';
import { HttpProcessorService } from './services/http-processor.service';
import { Mapper } from './mappers/Mapper';
import { AuthenticationService } from './services/authentication.service';
import { CallbackComponent } from './callback/callback.component';

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
    HomeComponent,
    LoginComponent,
    CallbackComponent,
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
    ExerciseService,
    HttpProcessorService,
    Mapper,
    AuthenticationService
  ]
})
export class CoreModule { }
