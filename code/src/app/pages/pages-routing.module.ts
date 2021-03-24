import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsLayoutComponent } from '../layouts/results-layout/results-layout.component';
import { DetailsComponent } from './details/details.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { SearchResultsComponent } from './search-results/search-results.component';



const routes: Routes = [
  {
    path: '',
    component: SearchHomeComponent
  },
  {
    path: 'results',
    component: ResultsLayoutComponent,
    children: [
      {
        path: '',
        component: SearchResultsComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'question/:id',
    component: ResultsLayoutComponent,
    children: [
      {
        path: '',
        component: DetailsComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
