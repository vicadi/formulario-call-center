import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CheckService {

    constructor(
        public http: HttpClient
    ){}

    saveCheckCustomer(checkDto): Observable<any>{
        return this.http.post('http://localhost:8080/save-check-customer', checkDto);
    }

}