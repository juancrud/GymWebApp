import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
    //{ path: 'customer', loadChildren: '../customer/customer.module#CustomerModule' },
    //{ path: 'trainer', loadChildren: '../trainer/trainer.module#TrainerModule' },
];
