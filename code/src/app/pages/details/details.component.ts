import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/core/services/question.service';
import { Answer, Question, SearchData } from 'src/app/models/question';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  answers: SearchData<Answer>;
  question: Question;
  loading = false;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log(this.id);
      this.getQuestionDetails(this.id);
    });
  }

  getQuestionDetails(questionId: number) {
    this.loading = true;
    this.questionService.getQuestion(questionId).subscribe(data => {
      this.question = data.items[0];
    });
    this.questionService.questionAnswers(questionId).subscribe(data => {
      console.log(data);
      this.answers = data;
      this.loading = false;
    });
  }
}
