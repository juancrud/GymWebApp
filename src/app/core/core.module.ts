import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent
  ],
  exports:[
    RouterModule,
    HeaderComponent, 
    FooterComponent,
    SidebarComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
