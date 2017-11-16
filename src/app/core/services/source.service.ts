import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

const ROOT_URL = 'https://raw.githubusercontent.com/alexmbrown/dev-tools/master/';
const opts = {responseType: 'text' as 'text'};

@Injectable()
export class SourceService {

  constructor(private http: HttpClient) {}

  public getComponent(url: string): Observable<string> {
    return this.http.get(`${ROOT_URL}${url}.component.ts`, opts);
  }

  public getHTML(url: string): Observable<string> {
    return this.http.get(`${ROOT_URL}${url}.component.html`, opts);
  }

  public getReadme(url?: string): Observable<string> {
      return this.http.get(`${ROOT_URL}${url || ''}/README.md`, opts);
  }

  public getStyle(url: string): Observable<string> {
    return this.http.get(`${ROOT_URL}${url}.component.scss`, opts);
  }

}
