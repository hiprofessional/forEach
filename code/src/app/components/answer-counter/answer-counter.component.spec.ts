import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCounterComponent } from './answer-counter.component';

describe('AnswerCounterComponent', () => {
  let component: AnswerCounterComponent;
  let fixture: ComponentFixture<AnswerCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
