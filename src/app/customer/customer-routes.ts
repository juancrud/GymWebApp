import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const customerRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: CustomerComponent, children: [ { path: '', component: DashboardComponent } ]  },
    
];
