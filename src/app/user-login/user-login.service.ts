import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, Response, RequestOptionsArgs, RequestMethod} from '@angular/http';

@Injectable()
export class LoginService {

  private apiUrl = 'https://b8s81nz8wa.execute-api.us-east-1.amazonaws.com/qa/login/get-login';

  constructor(private http: Http) { }

  loginUser(username, password): Observable<any> {
    return this.http.get(this.apiUrl + '?username=' + username + '&password=' + password) ;
  }

}
