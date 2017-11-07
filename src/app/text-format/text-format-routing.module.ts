import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextFormatComponent } from './text-format.component';

const routes: Routes = [{
  path: '',
  component: TextFormatComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextFormatRoutingModule { }
