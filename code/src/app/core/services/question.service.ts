import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Answer, Question, SearchData } from 'src/app/models/question';
import { answers } from 'src/app/testdata/answers';
import { questionData } from 'src/app/testdata/question';
import { search1 } from 'src/app/testdata/search1';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  useFake = environment.useFake;
  
  constructor(private http: HttpClient) { }

  search(searchValue: string): Observable<SearchData<Question>> {
    if (this.useFake) {
      return of(search1);
    }
    const api = `${environment.apiUrl}search?order=desc&sort=relevance&intitle=${encodeURIComponent(searchValue)}&site=stackoverflow`
    return this.http.get<SearchData<Question>>(api);
  }

  questionAnswers(questionId: number):  Observable<SearchData<Answer>> {
    if (this.useFake) {
      return of(answers);
    }

    const api = `${environment.apiUrl}questions/${questionId}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`
    return this.http.get<SearchData<Answer>>(api);
  }

  getQuestion(questionId: number):  Observable<SearchData<Question>> {
    if (this.useFake) {
      return of(questionData);
    }
    const api = `${environment.apiUrl}questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=withbody`
    return this.http.get<SearchData<Question>>(api);
  }
}
