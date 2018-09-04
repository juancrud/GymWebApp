import { Component, OnInit } from '@angular/core';
import { Trainer, TrainerStatus } from '../../core/models/Trainer';
import { TrainerService } from '../../core/services/trainer.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  trainers: Trainer[];
  error: Error;

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.getTrainers()
      .subscribe(trainers => this.trainers = trainers, error => this.error = error);

  }

  deleteTrainer(id: number) {
    let trainer = this.trainers.find(c => c.id === id);
    trainer.status = TrainerStatus.Deleted;
    this.trainerService.saveTrainer(trainer)
      .subscribe(m => console.log('deleted'), error => this.error = error);
  }

}
