import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecOptionComponent } from './spec-option.component';

describe('SpecOptionComponent', () => {
  let component: SpecOptionComponent;
  let fixture: ComponentFixture<SpecOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecOptionComponent]
    });
    fixture = TestBed.createComponent(SpecOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
