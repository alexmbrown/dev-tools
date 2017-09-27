import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'text-diff', loadChildren: './text-diff/text-diff.module#TextDiffModule' },
      { path: 'source', loadChildren: './source-viewer/source-viewer.module#SourceViewerModule' },
      {
        path: '',
        redirectTo: '/text-diff',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
