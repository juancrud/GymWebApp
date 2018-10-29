import { Component, OnInit } from '@angular/core';
import { Measurement, MeasurementStatus } from '../../core/models/Measurement';
import { MeasurementService } from '../../core/services/measurement.service';
import { GridModel } from '../../core/models/GridModel';
import { MapperService } from '../../core/services/mapper.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  measurements: Measurement[];
  error: Error;

  constructor(private measurementService: MeasurementService, private mapperService: MapperService) { }

  ngOnInit() {
    this.measurementService.getMeasurements().subscribe(measurements => this.measurements = measurements, error => this.error = error);
  }

  deleteMeasurement(id: number) {
    let measurement = this.measurements.find(c => c.id === id);
    measurement.status = MeasurementStatus.Deleted;
    this.measurementService.saveMeasurement(measurement)
      .subscribe(m => console.log('deleted'), error => this.error = error);
  }

  mapMeasurements(): GridModel[] {
    return this.measurements.map(x => this.mapperService.mapMeasurementsToGridModel(x));
  }
}
