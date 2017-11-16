import { Component, OnInit } from '@angular/core';
import { SourceService } from '../core/services/source.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dt-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public readme: Observable<string>;

  constructor(private source: SourceService) {}

  public ngOnInit(): void {
    this.readme = this.source.getReadme();
  }

}
