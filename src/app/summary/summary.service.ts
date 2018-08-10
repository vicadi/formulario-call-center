import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';

@Injectable()
export class SummaryService {

  private apiUrl = 'https://b8s81nz8wa.execute-api.us-east-1.amazonaws.com/qa/api-aproved/';

  constructor(private http: Http) { }

  public obtaingApproved(income, outcome): Observable<any> {
    return this.http.get(this.apiUrl + income + '/' + outcome)
      .map((response: Response) => response.text());
  }
}
