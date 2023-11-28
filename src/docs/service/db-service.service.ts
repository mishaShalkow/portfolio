import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { db } from '../models/dbModels';

@Injectable({
  providedIn: 'root',
})
export class DbServiceService {
  urlDb = 'http://localhost:3000/information';

  constructor(private http: HttpClient) {}

  getItem() {
    return this.http.get<db[]>(this.urlDb);
  }
}
