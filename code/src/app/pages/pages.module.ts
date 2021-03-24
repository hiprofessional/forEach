import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SearchHomeComponent } from './search-home/search-home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';
import { ComponentsModule } from '../components/components.module';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [SearchHomeComponent, SearchResultsComponent, DetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    LayoutsModule,
  ]
})
export class PagesModule { }
