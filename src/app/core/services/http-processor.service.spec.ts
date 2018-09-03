import { TestBed, inject } from '@angular/core/testing';

import { HttpProcessorService } from './http-processor.service';

describe('HttpProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProcessorService]
    });
  });

  it('should be created', inject([HttpProcessorService], (service: HttpProcessorService) => {
    expect(service).toBeTruthy();
  }));
});
