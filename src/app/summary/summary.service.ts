import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Http, Response } from "@angular/http";
 
@Injectable()
export class SummaryService {
 
  private apiUrl = 'http://localhost:8083/api_aproved/';
 
  constructor(private http: Http) { }
 
  public obtaingApproved(income, outcome): Observable<any> {
    return this.http.get(this.apiUrl+income+"/"+outcome)
      .map((response: Response) => response.text());
  }
}