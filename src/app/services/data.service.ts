import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  result: any;

  constructor(private http: HttpClient) { }

  getProducts(type: string) {
    const headersOps = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const httpOptions = {
      headers: headersOps
    };
    const url = `/api/${type}`;
    return this.http.get(url, httpOptions).pipe(
      map((result: any) => this.result = result.data || [])
    );
  }

  isProductExpired(date): boolean {
    if (date) {
      return Date.now() > new Date(date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')).getTime();
    }
    return false;
  }

}
