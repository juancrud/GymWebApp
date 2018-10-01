import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trainerRoutes } from './trainer-routes';

@NgModule({
  imports: [
    RouterModule.forChild(trainerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TrainerRoutingModule { }
