import { TestBed, inject } from '@angular/core/testing';

import { TrainersService } from './trainers.service';

describe('TrainersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainersService]
    });
  });

  it('should be created', inject([TrainersService], (service: TrainersService) => {
    expect(service).toBeTruthy();
  }));
});
