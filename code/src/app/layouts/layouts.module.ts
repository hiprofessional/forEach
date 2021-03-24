import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsLayoutComponent } from './results-layout/results-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ResultsLayoutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    ResultsLayoutComponent
  ]
})
export class LayoutsModule { }
