import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import 'rxjs/add/operator/switchMap';

import { TrainerService } from '../../core/services/trainer.service';
import { Trainer } from '../../core/models/Trainer';

@Component({
  selector: 'app-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit {
  trainerId: number;
  trainer: Trainer;

  constructor(private trainerService: TrainerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.trainerId = +params['id'];
        return this.trainerService.getTrainer(this.trainerId);
      })
      .subscribe(trainer => {
        this.trainer = trainer;
      });
  }

}
