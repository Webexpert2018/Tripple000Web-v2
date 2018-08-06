import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackpointsComponent } from './trackpoints.component';

describe('TrackpointsComponent', () => {
  let component: TrackpointsComponent;
  let fixture: ComponentFixture<TrackpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
