import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    { label: "Dashboard", link: "/customer/dashboard" },
    { label: "Test 1c", link: "/customer" },
    { label: "Test 2c", link: "/customer" },
    { label: "Test 3c", link: "/customer" },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
