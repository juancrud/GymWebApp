import { Injectable } from '@angular/core';
import { GridModel } from '../models/GridModel';
import { Customer } from '../models/Customer';
import { Trainer } from '../models/Trainer';
import { Measurement } from '../models/Measurement';
import { ExerciseCategory } from '../models/ExerciseCategory';

@Injectable()
export class MapperService {

  constructor() { }

  public mapCustomerToGridModel(customer: Customer): GridModel {
    let gridModel = new GridModel();
    gridModel.id = customer.id;
    gridModel.name = customer.name;
    gridModel.imageUrl = customer.imageUrl;
    gridModel.details = customer.emailAddress + " | " + customer.phoneNumber;
    gridModel.status = customer.status;

    return gridModel;
  }

  public mapTrainerToGridModel(trainer: Trainer): GridModel {
    let gridModel = new GridModel();
    gridModel.id = trainer.id;
    gridModel.name = trainer.name;
    gridModel.imageUrl = trainer.imageUrl;
    gridModel.details = trainer.emailAddress + " | " + trainer.phoneNumber;
    gridModel.status = trainer.status;

    return gridModel;
  }

  public mapMeasurementsToGridModel(measurement: Measurement): GridModel {
    let gridModel = new GridModel();
    gridModel.id = measurement.id;
    gridModel.name = measurement.name;
    gridModel.imageUrl = measurement.imageUrl;
    gridModel.details = measurement.description;
    gridModel.status = measurement.status;

    return gridModel;
  }

  public mapExercisesCategoriesToGridModel(exerciseCategory: ExerciseCategory): GridModel {
    let gridModel = new GridModel();
    gridModel.id = exerciseCategory.id;
    gridModel.name = exerciseCategory.name;
    gridModel.imageUrl = exerciseCategory.imageUrl;
    gridModel.details = exerciseCategory.description;
    gridModel.status = exerciseCategory.status;

    return gridModel;
  }

}
