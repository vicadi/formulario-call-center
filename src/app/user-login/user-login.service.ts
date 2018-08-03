import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, Response, RequestOptionsArgs, RequestMethod} from "@angular/http";
 
@Injectable()
export class LoginService {
 
  private apiUrl = 'http://localhost:8080/login';
 
  constructor(private http: Http) { }
 
  public loginUser(username, password) : Observable<any> {
    return this.http.get(this.apiUrl+"?username="+ username +"&password="+ password)
        .map((response: Response) => response.text());
  }
}