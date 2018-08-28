import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GridModel } from '../../core/models/GridModel';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() addRoute: string;
  @Input() editRoute: string;
  @Input() elements: GridModel[];
  @Output() myEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  
  }

  fireMyEvent(id) {
    this.myEvent.emit(id);
  }

}
