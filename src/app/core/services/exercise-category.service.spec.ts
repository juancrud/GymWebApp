import { TestBed, inject } from '@angular/core/testing';

import { ExerciseCategoryService } from './exercise-category.service';

describe('ExerciseCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseCategoryService]
    });
  });

  it('should be created', inject([ExerciseCategoryService], (service: ExerciseCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
