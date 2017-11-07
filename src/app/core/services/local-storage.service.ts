import { Injectable } from '@angular/core';

declare const localStorage;

@Injectable()
export class LocalStorageService {

  public set(key: string, obj: any): void {
    if (typeof obj === 'object') {
      localStorage.setItem(key, JSON.stringify(obj));
    }
  }

  public get(key: string): any {
    return localStorage.getItem(key);
  }

  public getObj(key: string): object {
    return JSON.parse(this.get(key));
  }

}
