import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceViewerComponent } from './source-viewer.component';

const routes: Routes = [{
  path: '**',
  component: SourceViewerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceViewerRoutingModule { }
