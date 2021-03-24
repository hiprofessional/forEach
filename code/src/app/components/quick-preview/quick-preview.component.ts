import { Component, OnInit } from '@angular/core';
import { QuickPanelService } from 'src/app/core/services/quick-panel.service';
import { Question, SearchData } from 'src/app/models/question';

@Component({
  selector: 'app-quick-preview',
  templateUrl: './quick-preview.component.html',
  styleUrls: ['./quick-preview.component.scss']
})
export class QuickPreviewComponent implements OnInit {
  isPanelVisible = false;
  items: SearchData<Question>;
  loading: boolean;
  searchBy;
  searchValue: string;

  constructor(private quickService: QuickPanelService) { }

  ngOnInit(): void {
    this.initPanel();
  }

  initPanel() {
    this.quickService.isPanelVisible.subscribe(data => {
      this.isPanelVisible = data;
    });
    this.quickService.quickData.subscribe(data => {
      this.items = data;
      console.log(data)
    });
    this.quickService.loading.subscribe(data => {
      this.loading = data;
    }); 
    this.quickService.searchByPropertyName.subscribe(data => {
      this.searchBy = data;
    }); 
    this.quickService.searchByValue.subscribe(data => {
      this.searchValue = data;
    });
  }

  closePanel() {
    this.quickService.closePanel();
  }
}
