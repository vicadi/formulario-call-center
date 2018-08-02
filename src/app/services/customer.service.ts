import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

    constructor(
        public http: HttpClient
    ){}

    getCustomer(identityNumber): Observable<any>{
        return this.http.get('http://localhost:8080/get-customer/?identityNumber='+ identityNumber);
    }

    createCustomer(customerDto): Observable<any>{
        return this.http.post('http://localhost:8080/save-customer', customerDto);
    }

    updateCustomer(customerDto): Observable<any>{
        return this.http.post('http://localhost:8080/update-customer', customerDto);
    }

}
