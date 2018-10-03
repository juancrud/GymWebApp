import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    { label: "Dashboard", link: "/trainer/dashboard", icon: "fa-folder" },
    { label: "Test 1t", link: "/trainer", icon: "fa-folder" },
    { label: "Test 2t", link: "/trainer", icon: "fa-folder" },
    { label: "Test 3t", link: "/trainer", icon: "fa-folder" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
