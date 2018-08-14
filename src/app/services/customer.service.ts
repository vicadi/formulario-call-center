import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

    private apiUrl = 'https://b8s81nz8wa.execute-api.us-east-1.amazonaws.com/qa/customer/';
    constructor(
        public http: HttpClient
    ) {}

    getCustomer(identityNumber): Observable<any> {
        return this.http.get(this.apiUrl + 'get-customer?identityNumber=' + identityNumber);
    }

    createCustomer(customerDto): Observable<any> {
        return this.http.post(this.apiUrl + 'save-customer', customerDto);
    }

    updateCustomer(customerDto): Observable<any> {
        return this.http.post(this.apiUrl + 'update-customer', customerDto);
    }

}
