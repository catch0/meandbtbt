import { TestBed, inject } from '@angular/core/testing';

import { ProofService } from './proof.service';

describe('ProofService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProofService]
    });
  });

  it('should be created', inject([ProofService], (service: ProofService) => {
    expect(service).toBeTruthy();
  }));
});
