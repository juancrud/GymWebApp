import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    { label: "Dashboard", link: "/admin/dashboard", icon: "fa fa-home" },
    { label: "Trainers", link: "/admin/trainers", icon: "fa fa-handshake-o" },
    { label: "Customers", link: "/admin/customers", icon: "fa fa-users" },
    { label: "Measurements", link: "/admin/measurements", icon: "fa fa-bar-chart" },
    { label: "Exercises", link: "/admin/exercises", icon: "fa fa-universal-access" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
