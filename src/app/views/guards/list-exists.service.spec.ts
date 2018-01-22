import { TestBed, inject } from '@angular/core/testing';

import { ListExistsService } from './list-exists.service';

describe('ListExistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListExistsService]
    });
  });

  it('should be created', inject([ListExistsService], (service: ListExistsService) => {
    expect(service).toBeTruthy();
  }));
});
