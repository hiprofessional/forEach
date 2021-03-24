import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Question, SearchData } from 'src/app/models/question';
import { search1 } from 'src/app/testdata/search1';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuickPanelService {
  quickData = new BehaviorSubject<SearchData<Question>>({
    items: [],
    has_more: false,
    quota_max: 1,
    quota_remaining: 1,
  });

  isPanelVisible = new BehaviorSubject<boolean>(false);
  loading = new BehaviorSubject<boolean>(false);
  searchByPropertyName = new BehaviorSubject<string>('');
  searchByValue = new BehaviorSubject<string>('');
  
  useFake = environment.useFake;
  constructor(private http: HttpClient) { }

  showPanel() {
    this.isPanelVisible.next(true);
  }
  closePanel() {
    this.isPanelVisible.next(false);
  }
  
  showMostPopularQuestionsByTag(tag: string) {
    this.searchByPropertyName.next('tag');
    this.searchByValue.next(tag);

    if (this.useFake) {
      this.quickData.next(search1);
      return;
    }
    this.loading.next(true);
    const api = `${environment.apiUrl}search?order=desc&sort=votes&tagged=${encodeURIComponent(tag)}&site=stackoverflow`
    return this.http.get<SearchData<Question>>(api).subscribe(data => {
      this.quickData.next(data);
      this.loading.next(false);
    });
  }

  showMostPopularQuestionsByAuthor(authorId: number, authorName: string) {
    this.searchByPropertyName.next('author');
    this.searchByValue.next(authorName);
    if (this.useFake) {
      this.quickData.next(search1);
      return;
    }

    this.loading.next(true);
    const api = `${environment.apiUrl}users/${authorId}/questions?order=desc&sort=votes&site=stackoverflow`
    return this.http.get<SearchData<Question>>(api).subscribe(data => {
      this.quickData.next(data);
      this.loading.next(false);
    });
  }
}
