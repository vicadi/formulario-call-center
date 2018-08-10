import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Score } from '../models/score.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ScoreService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://b8s81nz8wa.execute-api.us-east-1.amazonaws.com/qa/score/';

  public saveScore(score) {
    return this.http.post<Score>(this.apiUrl, score);
  }
}
