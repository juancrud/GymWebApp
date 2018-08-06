import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { TrainersComponent } from './trainers/trainers.component';
import { CustomersComponent } from './customers/customers.component';
import { TrainerEditComponent } from './trainer-edit/trainer-edit.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { MeasurementEditComponent } from './measurement-edit/measurement-edit.component';

export const adminRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AdminComponent, children: [ { path: '', component: DashboardComponent } ]  },
    { path: 'trainers', component: AdminComponent, children: [ { path: '', component: TrainersComponent } ]  },
    { path: 'customers', component: AdminComponent, children: [ { path: '', component: CustomersComponent } ]  },
    { path: 'measurements', component: AdminComponent, children: [ { path: '', component: MeasurementsComponent } ]  },
    { path: 'editTrainer/:id', component: AdminComponent, children: [ { path: '', component: TrainerEditComponent } ]  },
    { path: 'editCustomer/:id', component: AdminComponent, children: [ { path: '', component: CustomerEditComponent } ]  },
    { path: 'editMeasurement/:id', component: AdminComponent, children: [ { path: '', component: MeasurementEditComponent } ]  }
];
