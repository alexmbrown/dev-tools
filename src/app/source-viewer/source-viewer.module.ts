import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SourceViewerRoutingModule } from './source-viewer-routing.module';
import { SourceViewerComponent } from './source-viewer.component';
import { MatTabsModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SourceViewerComponent
  ],
  imports: [
    CommonModule,
    SourceViewerRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class SourceViewerModule {}
