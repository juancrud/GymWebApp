import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementSaveComponent } from './measurement-save.component';

describe('MeasurementSaveComponent', () => {
  let component: MeasurementSaveComponent;
  let fixture: ComponentFixture<MeasurementSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
