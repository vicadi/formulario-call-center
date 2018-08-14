import { Component, OnInit, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class DeliveryCardService {

  private apiUrl = 'https://b8s81nz8wa.execute-api.us-east-1.amazonaws.com/qa/master-data/';

  constructor(private http: Http) { }

  getCities(): Observable<any> {
    return this.http.get(this.apiUrl + 'get-cities').map((response: Response) => response.json());
  }

  getListAdd(): Observable<any> {
    return this.http.get(this.apiUrl + 'get-address').map((response: Response) => response.json());
  }

  getListAddByType(type: String): Observable<any> {
    return this.http.get(this.apiUrl + 'get-address?type=' + type).map((response: Response) => response.json());
  }

  getOffice(city: String): Observable<any> {
    return this.http.get(this.apiUrl + 'get-offices?city=' + city).map((response: Response) => response.json());
  }
}
