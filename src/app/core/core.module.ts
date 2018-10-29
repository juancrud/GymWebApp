import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HttpModule } from '../../../node_modules/@angular/http';
import { TrainerService } from './services/trainer.service';
import { MeasurementService } from './services/measurement.service';
import { CustomerService } from './services/customer.service';
import { ExerciseCategoryService } from './services/exercise-category.service';
import { ExerciseService } from './services/exercise.service';
import { LoginComponent } from './login/login.component';
import { HttpProcessorService } from './services/http-processor.service';
import { AuthenticationService } from './services/authentication.service';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user.service';
import { SharedModule } from '../shared/shared.module';
import { UserProfileService } from './services/user-profile.service';
import { MapperService } from './services/mapper.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CallbackComponent,
    ProfileComponent,
  ],
  exports:[
    RouterModule,
    HeaderComponent, 
    FooterComponent
  ],
  providers: [
    TrainerService,
    MeasurementService,
    CustomerService,
    ExerciseCategoryService,
    ExerciseService,
    HttpProcessorService,
    MapperService,
    AuthenticationService,
    UserService,
    UserProfileService
  ]
})
export class CoreModule { }
