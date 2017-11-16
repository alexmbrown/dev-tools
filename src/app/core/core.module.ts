import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SourceService } from './services/source.service';
import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    SourceService
  ]
})
export class CoreModule { }
