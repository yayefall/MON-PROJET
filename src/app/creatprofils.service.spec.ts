import { TestBed } from '@angular/core/testing';

import { CreatprofilsService } from './Service/creatprofils.service';

describe('CreatprofilsService', () => {
  let service: CreatprofilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatprofilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
