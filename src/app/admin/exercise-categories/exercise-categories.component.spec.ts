import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCategoriesComponent } from './exercise-categories.component';

describe('ExerciseCategoriesComponent', () => {
  let component: ExerciseCategoriesComponent;
  let fixture: ComponentFixture<ExerciseCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
