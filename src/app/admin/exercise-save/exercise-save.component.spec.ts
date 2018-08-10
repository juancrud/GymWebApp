import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSaveComponent } from './exercise-save.component';

describe('ExerciseSaveComponent', () => {
  let component: ExerciseSaveComponent;
  let fixture: ComponentFixture<ExerciseSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
