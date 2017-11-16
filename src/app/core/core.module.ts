import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SourceService } from './services/source.service';
import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownService } from './services/markdown.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    MarkdownService,
    SourceService
  ]
})
export class CoreModule { }
