import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSubmitedComponent } from './answer-submited.component';

describe('AnswerSubmitedComponent', () => {
  let component: AnswerSubmitedComponent;
  let fixture: ComponentFixture<AnswerSubmitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSubmitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
