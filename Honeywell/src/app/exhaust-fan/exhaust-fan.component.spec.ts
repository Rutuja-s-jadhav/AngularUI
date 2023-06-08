import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustFanComponent } from './exhaust-fan.component';

describe('ExhaustFanComponent', () => {
  let component: ExhaustFanComponent;
  let fixture: ComponentFixture<ExhaustFanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhaustFanComponent]
    });
    fixture = TestBed.createComponent(ExhaustFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
