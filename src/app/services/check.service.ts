import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CheckService {

    private apiUrl = 'https://b8s81nz8wa.execute-api.us-east-1.amazonaws.com/qa/customer/';
    constructor(
        public http: HttpClient
    ) {}

    saveCheckCustomer(checkDto): Observable<any> {
        return this.http.post(this.apiUrl + 'save-check-customer', checkDto);
    }
}
