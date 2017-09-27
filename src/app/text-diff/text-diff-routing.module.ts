import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextDiffComponent } from './text-diff.component';

const routes: Routes = [{
  path: '',
  component: TextDiffComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextDiffRoutingModule { }
