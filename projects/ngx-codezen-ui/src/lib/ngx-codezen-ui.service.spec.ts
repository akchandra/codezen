import { TestBed } from '@angular/core/testing';

import { NgxCodezenUiService } from './ngx-codezen-ui.service';

describe('NgxCodezenUiService', () => {
  let service: NgxCodezenUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCodezenUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
