import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items: SidebarItem[];

  constructor() { }

  ngOnInit() {
  }

}

export class SidebarItem {
  label: string;
  link: string;
  icon: string;
}
