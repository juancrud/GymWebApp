import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer-routes';

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CustomerRoutingModule { }
