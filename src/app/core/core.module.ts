import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SourceService } from './services/source.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    SourceService
  ]
})
export class CoreModule { }
