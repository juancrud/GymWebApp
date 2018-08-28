import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorTitle: string = 'Error';
  errorMessage: string = 'An internal error happened.';

  constructor() { }

  ngOnInit() {
  }

}
