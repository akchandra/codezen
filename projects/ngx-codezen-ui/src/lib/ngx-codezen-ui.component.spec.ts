import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCodezenUiComponent } from './ngx-codezen-ui.component';

describe('NgxCodezenUiComponent', () => {
  let component: NgxCodezenUiComponent;
  let fixture: ComponentFixture<NgxCodezenUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCodezenUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCodezenUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
