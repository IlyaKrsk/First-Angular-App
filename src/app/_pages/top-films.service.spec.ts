import { TestBed } from '@angular/core/testing';

import { TopFilmsService } from './top-films.service';

describe('TopFilmsService', () => {
  let service: TopFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
