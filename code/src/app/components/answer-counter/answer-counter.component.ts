import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-counter',
  templateUrl: './answer-counter.component.html',
  styleUrls: ['./answer-counter.component.scss']
})
export class AnswerCounterComponent implements OnInit {
  @Input() count: number;
  @Input() isAnswered: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
