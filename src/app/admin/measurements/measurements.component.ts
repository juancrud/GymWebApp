import { Component, OnInit } from '@angular/core';
import { Measurement } from '../../core/models/Measurement';
import { MeasurementService } from '../../core/services/measurement.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  measurements: Measurement[];

  constructor(private measurementService: MeasurementService) { }

  ngOnInit() {
    this.measurementService.getMeasurements()
      .subscribe(measurements => this.measurements = measurements);
  }

}
