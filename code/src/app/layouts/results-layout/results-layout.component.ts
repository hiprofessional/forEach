import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-results-layout',
  templateUrl: './results-layout.component.html',
  styleUrls: ['./results-layout.component.scss']
})
export class ResultsLayoutComponent implements OnInit {
  query: string;
  constructor(private location: Location) {}

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
    return false;
  }
}
