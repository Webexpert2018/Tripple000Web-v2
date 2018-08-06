import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosSignalsComponent } from './sossignals.component';

describe('SossignalsComponent', () => {
  let component: SosSignalsComponent;
  let fixture: ComponentFixture<SosSignalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosSignalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
