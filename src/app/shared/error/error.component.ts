import { Component, OnInit, Input } from '@angular/core';
import { Error } from '../../core/models/Error';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() error: Error;
  showDetails: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
