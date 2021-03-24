import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/core/services/question.service';
import { Question, SearchData } from 'src/app/models/question';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  items: SearchData<Question>;
  query: string;
  loading = false;
  
  constructor(private questionService: QuestionService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.search(this.query);
    });
  }

  search(searchValue: string) {
    this.loading = true;
    this.questionService.search(searchValue).subscribe(data => {
      console.log(data);
      this.items = data;
      this.loading = false;
    });
  }
}
