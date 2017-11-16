import { Injectable } from '@angular/core';

declare const localStorage;

@Injectable()
export class LocalStorageService {

  public set(key: string, value: any): void {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }

  public get(key: string): any {
    return localStorage.getItem(key);
  }

  public getObj(key: string): object {
    return JSON.parse(this.get(key));
  }

}
