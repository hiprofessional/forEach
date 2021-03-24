import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { AnswerCounterComponent } from './answer-counter/answer-counter.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { TagComponent } from './tag/tag.component';
import { QuickPreviewComponent } from './quick-preview/quick-preview.component';
import { AuthorComponent } from './author/author.component'; // CLI imports router


@NgModule({
  declarations: [
    SearchBarComponent,
    QuestionItemComponent,
    AnswerCounterComponent,
    AnswerComponent,
    QuestionDetailsComponent,
    TagComponent,
    QuickPreviewComponent,
    AuthorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    SearchBarComponent,
    QuestionItemComponent,
    AnswerCounterComponent,
    AnswerComponent,
    QuestionDetailsComponent,
    QuickPreviewComponent,
  ]
})
export class ComponentsModule { }
