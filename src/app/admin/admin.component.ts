import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    { label: "Dashboard", link: "/admin/dashboard", icon: "fa-folder" },
    { label: "Trainers", link: "/admin/trainers", icon: "fa-folder" },
    { label: "Customers", link: "/admin/customers", icon: "fa-folder" },
    { label: "Measurements", link: "/admin/measurements", icon: "fa-folder" },
    { label: "Exercises", link: "/admin/exercises", icon: "fa-folder" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
