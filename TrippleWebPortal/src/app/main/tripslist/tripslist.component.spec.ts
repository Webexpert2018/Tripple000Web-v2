import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsListComponent } from './tripslist.component';

describe('TripslistComponent', () => {
  let component: TripsListComponent;
  let fixture: ComponentFixture<TripsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TripsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
