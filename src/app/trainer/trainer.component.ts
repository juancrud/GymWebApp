import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    { label: "Dashboard", link: "/trainer/dashboard" },
    { label: "Test 1t", link: "/trainer" },
    { label: "Test 2t", link: "/trainer" },
    { label: "Test 3t", link: "/trainer" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
