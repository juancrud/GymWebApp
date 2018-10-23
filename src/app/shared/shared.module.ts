import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    GridComponent,
    LoadingComponent,
    ErrorComponent
  ],
  exports: [
    RouterModule,
    SidebarComponent,
    GridComponent,
    LoadingComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
