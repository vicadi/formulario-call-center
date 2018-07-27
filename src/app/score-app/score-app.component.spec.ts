import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreAppComponent } from './score-app.component';

describe('ScoreAppComponent', () => {
  let component: ScoreAppComponent;
  let fixture: ComponentFixture<ScoreAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
