import { Routes } from "@angular/router";
import { TrainerComponent } from "./trainer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const trainerRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: TrainerComponent, children: [ { path: '', component: DashboardComponent } ]  },
    
];
