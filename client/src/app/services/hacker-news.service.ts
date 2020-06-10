import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private http: HttpClient) { }

  HACKER_NEWS_URL = 'http://localhost:3000/endpoint/';

  getHackerNewsPosts(): Observable<any> {
    return this.http.get(this.HACKER_NEWS_URL + 'hackerNewsPosts');
  }
  initialPopulate(): Observable<any> {
    return this.http.get(this.HACKER_NEWS_URL + 'initialPopulate');
  }

  setDeleteItems(items: string []): void {
    localStorage.setItem('deleteItems', JSON.stringify(items));
  }

  getDeleteItems(): any {
    return localStorage.getItem('deleteItems') ? JSON.parse(localStorage.getItem('deleteItems')) : [];
  }

  clearDeleteItems(): void {
    localStorage.removeItem('deleteItems');
  }
}
