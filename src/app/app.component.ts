import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {}

  public sourceLinkActive(): boolean {
    return this.router.url.indexOf('/source/') < 0;
  }

  public viewSource(): void {
    if (this.sourceLinkActive()) {
      this.router.navigate(['source', this.router.url.replace('/', '')]);
    }
  }

}
