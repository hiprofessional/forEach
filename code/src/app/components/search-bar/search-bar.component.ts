import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() searchValue: string;
  // @Input() searchValue = 'angular akita';
  @Output() search = new EventEmitter<string>();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchValue = params['q'];
      // console.log(this.searchValue);
      this.clickSearch();
    });
  }

  clickSearch() {
    if (this.searchValue) {
      // this.search.emit(this.searchValue);
      this.goToSearch(this.searchValue);
    }
  }
  goToSearch(searchValue: string) {
    this.router.navigate(['/results'], { queryParams: {q: searchValue} });
  }
}
