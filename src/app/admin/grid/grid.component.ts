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
  filteredElements: GridModel[];

  ngOnInit() {
    this.filteredElements = this.elements;
  }

  fireMyEvent(id) {
    this.myEvent.emit(id);
  }

  onKeyUp(value: string) {
    value = value.toLocaleLowerCase();
    this.filteredElements = this.elements
      .filter(element => element.name.toLocaleLowerCase().indexOf(value) != -1 || 
              element.status.toLocaleLowerCase().indexOf(value) != -1);
  }
}
