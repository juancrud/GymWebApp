import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../core/services/customer.service';
import { TrainerService } from '../../core/services/trainer.service';
import { MeasurementService } from '../../core/services/measurement.service';
import { TrainerStatus } from '../../core/models/Trainer';
import { CustomerStatus } from '../../core/models/Customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalTrainers: number;
  activeTrainers: number;
  inactiveTrainers: number;
  deletedTrainers: number;

  totalCustomers: number;
  activeCustomers: number;
  inactiveCustomers: number;
  deletedCustomers: number;

  totalMeasurements: number;

  constructor(
    private customerService: CustomerService,
    private trainerService: TrainerService,
    private measurementService: MeasurementService
  ) { }

  ngOnInit() {
    this.trainerService.getTrainers().subscribe(trainers => {
      this.totalTrainers = trainers.length;
      this.activeTrainers = trainers.filter(t => t.status === TrainerStatus.Active).length;
      this.inactiveTrainers = trainers.filter(t => t.status === TrainerStatus.Inactive).length;
      this.deletedTrainers = trainers.filter(t => t.status === TrainerStatus.Deleted).length;
    });

    this.customerService.getCustomers().subscribe(customers => {
      this.totalCustomers = customers.length;
      this.activeCustomers = customers.filter(t => t.status === CustomerStatus.Active).length;
      this.inactiveCustomers = customers.filter(t => t.status === CustomerStatus.Inactive).length;
      this.deletedCustomers = customers.filter(t => t.status === CustomerStatus.Deleted).length;
    })

    this.measurementService.getMeasurements().subscribe(measurements => {
      this.totalMeasurements = measurements.length;
    })
  }

}
