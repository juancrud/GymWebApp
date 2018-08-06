import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import 'rxjs/add/operator/switchMap';

import { Measurement } from '../../core/models/Measurement';
import { MeasurementService } from '../../core/services/measurement.service';


@Component({
  selector: 'app-measurement-edit',
  templateUrl: './measurement-edit.component.html',
  styleUrls: ['./measurement-edit.component.scss']
})
export class MeasurementEditComponent implements OnInit {
  measurementId: number;
  measurement: Measurement;

  constructor(private measurementService: MeasurementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.measurementId = +params['id'];
        return this.measurementService.getMeasurement(this.measurementId);
      })
      .subscribe(measurement => {
        this.measurement = measurement;
      });
  }

}
