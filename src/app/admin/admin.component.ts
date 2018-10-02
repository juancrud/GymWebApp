import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Trainers", link: "/admin/trainers" },
    { label: "Customers", link: "/admin/customers" },
    { label: "Measurements", link: "/admin/measurements" },
    { label: "Exercises", link: "/admin/exercises" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
