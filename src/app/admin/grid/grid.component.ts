import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GridModel } from '../../core/models/GridModel';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() callback: Function;
  @Input() addRoute: string;
  @Input() editRoute: string;
  @Input() elements: GridModel[];

  constructor() { }

  ngOnInit() {
  
  }

}
