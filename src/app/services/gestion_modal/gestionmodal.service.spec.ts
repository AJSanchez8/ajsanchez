import { TestBed } from '@angular/core/testing';

import { GestionmodalService } from './gestionmodal.service';

describe('GestionmodalService', () => {
  let service: GestionmodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionmodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
