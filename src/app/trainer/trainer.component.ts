import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    { label: "Dashboard", link: "/trainer/dashboard", icon: "fa fa-home" },
    { label: "Customers", link: "/trainer/customers", icon: "fa fa-users" },
    { label: "Routines", link: "/trainer", icon: "fa fa-calculator" },
    { label: "Measurements", link: "/trainer", icon: "fa fa-bar-chart" },
    { label: "Exercises", link: "/trainer", icon: "fa fa-universal-access" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
