import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitaryHeatComponent } from './unitary-heat.component';

describe('UnitaryHeatComponent', () => {
  let component: UnitaryHeatComponent;
  let fixture: ComponentFixture<UnitaryHeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitaryHeatComponent]
    });
    fixture = TestBed.createComponent(UnitaryHeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
