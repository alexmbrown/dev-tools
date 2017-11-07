import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SourceService } from './services/source.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    LocalStorageService,
    SourceService
  ]
})
export class CoreModule { }
