import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SourceService } from '../core/services/source.service';

@Component({
  selector: 'dt-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.css']
})
export class SourceViewerComponent implements OnInit {


  // content
  public html: string;
  public readme: string;
  public scss: string;
  public ts: string;

  constructor(
    private router: Router,
    public source: SourceService
  ) {}

  public ngOnInit(): void {
    const url = this.router.url.replace('/source/', '');
    this.source.getHTML(url).subscribe((html: string) => this.html = html);
    this.source.getReadme(url).subscribe((readme: string) => this.readme = readme);
    this.source.getStyle(url).subscribe((scss: string) => this.scss = scss);
    this.source.getComponent(url).subscribe((ts: string) => this.ts = ts);
  }

}
