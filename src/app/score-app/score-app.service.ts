import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  
import { Score } from '../models/score.model';

import { Http, Response } from "@angular/http";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
      
 
@Injectable()
export class ScoreService {
 
  constructor(private http:HttpClient) {}

  private apiUrl = 'http://localhost:8080/score/';

  public saveScore(score) {
    return this.http.post<Score>(this.apiUrl, score);
  }
}   