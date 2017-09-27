import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data);
    });
  }

  public sourceLinkActive(): boolean {
    return this.router.url.indexOf('/source/') < 0;
  }

  public viewSource(): void {
    if (this.sourceLinkActive()) {
      this.router.navigate(['source', this.router.url.replace('/', '')]);
    }
  }

}
