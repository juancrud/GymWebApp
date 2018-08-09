import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSaveComponent } from './trainer-save.component';

describe('TrainerSaveComponent', () => {
  let component: TrainerSaveComponent;
  let fixture: ComponentFixture<TrainerSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
