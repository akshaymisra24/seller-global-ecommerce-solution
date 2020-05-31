import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicTableComponent} from './dynamic-table.component';
import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    RouterModule
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule { }
