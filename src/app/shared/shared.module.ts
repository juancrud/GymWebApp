import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    GridComponent
  ],
  exports: [
    SidebarComponent,
    RouterModule,
    GridComponent
  ]
})
export class SharedModule { }
