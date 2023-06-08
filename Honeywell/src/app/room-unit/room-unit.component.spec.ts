import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomUnitComponent } from './room-unit.component';

describe('RoomUnitComponent', () => {
  let component: RoomUnitComponent;
  let fixture: ComponentFixture<RoomUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomUnitComponent]
    });
    fixture = TestBed.createComponent(RoomUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
