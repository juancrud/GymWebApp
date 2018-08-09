import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { TrainersComponent } from './trainers/trainers.component';
import { CustomersComponent } from './customers/customers.component';
import { MeasurementSaveComponent } from './measurement-save/measurement-save.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';

export const adminRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AdminComponent, children: [ { path: '', component: DashboardComponent } ]  },
    { path: 'trainers', component: AdminComponent, children: [ { path: '', component: TrainersComponent } ]  },
    { path: 'customers', component: AdminComponent, children: [ { path: '', component: CustomersComponent } ]  },
    { path: 'measurements', component: AdminComponent, children: [ { path: '', component: MeasurementsComponent } ]  },
    
    { path: 'saveMeasurement/:id', component: AdminComponent, children: [ { path: '', component: MeasurementSaveComponent } ]  },
    { path: 'saveMeasurement', component: AdminComponent, children: [ { path: '', component: MeasurementSaveComponent } ]  },
    { path: 'saveCustomer/:id', component: AdminComponent, children: [ { path: '', component: CustomerSaveComponent } ]  },
    { path: 'saveCustomer', component: AdminComponent, children: [ { path: '', component: CustomerSaveComponent } ]  },
];
