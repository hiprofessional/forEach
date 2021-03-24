import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuickPanelService } from 'src/app/core/services/quick-panel.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tag: string;
  @Output() tagClicked = new EventEmitter<string>();
  constructor(private quickService: QuickPanelService) { }

  ngOnInit(): void {
  }

  clickTag() {
    this.tagClicked.emit(this.tag);
    this.quickService.showPanel();
    this.quickService.showMostPopularQuestionsByTag(this.tag);
  }
}
