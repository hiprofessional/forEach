import { Component, Input, OnInit } from '@angular/core';
import { QuickPanelService } from 'src/app/core/services/quick-panel.service';
import { Owner } from 'src/app/models/question';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @Input() author: Owner;
  constructor(private quickService: QuickPanelService) { }

  ngOnInit(): void {
  }

  clickAuthor() {
    this.quickService.showPanel();
    this.quickService.showMostPopularQuestionsByAuthor(this.author.user_id, this.author.display_name);
  }
}
