import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const ROOT_URL = 'https://raw.githubusercontent.com/alexmbrown/dev-tools/master/src/app/';

@Injectable()
export class SourceService {

  constructor(private http: Http) {}

  public getComponent(url): Observable<string> {
    return this.http.get(`${ROOT_URL}${url}/${url}.component.ts`)
      .map((res: Response) => res.text());
  }

  public getHTML(url): Observable<string> {
    return this.http.get(`${ROOT_URL}${url}/${url}.component.html`)
      .map((res: Response) => res.text());
  }

  public getReadme(url): Observable<string> {
    return this.http.get(`${ROOT_URL}${url}/README.md`)
      .map((res: Response) => res.text());
  }

  public getStyle(url): Observable<string> {
    return this.http.get(`${ROOT_URL}${url}/${url}.component.scss`)
      .map((res: Response) => res.text());
  }

}
