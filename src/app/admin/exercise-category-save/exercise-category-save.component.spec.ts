import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCategorySaveComponent } from './exercise-category-save.component';

describe('ExerciseCategorySaveComponent', () => {
  let component: ExerciseCategorySaveComponent;
  let fixture: ComponentFixture<ExerciseCategorySaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseCategorySaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCategorySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
