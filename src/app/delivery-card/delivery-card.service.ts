import { Component, OnInit, Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
 
@Injectable()
export class DeliveryCardService {
 
  private apiUrl = 'http://localhost:8080/';
 
  constructor(private http: Http) { }
 
  getCities(): Observable<any> {
    return this.http.get(this.apiUrl+'cities')
      .map((response: Response) => response.json());
  }

  

}