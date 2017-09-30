import { Component, OnInit } from '@angular/core';
import { SourceService } from '../core/services/source.service';

@Component({
  selector: 'dt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public readme: string;

  constructor(private source: SourceService) {}

  public ngOnInit(): void {
    this.source.getReadme().subscribe((readme: string) => this.readme = readme);
  }

}
