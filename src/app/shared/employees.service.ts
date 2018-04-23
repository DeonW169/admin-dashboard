import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Employee } from '../shared/employee';

@Injectable()
export class EmployeesService {
    private apiUrl = 'http://staging.tangent.tngnt.co/api/employee/';

    constructor(private http: Http) { }

    getEmployees(): Observable<Employee[]> {
        const authToken = sessionStorage.getItem('token');

        return this.http.get(this.apiUrl, {
            headers: new Headers({
                'Authorization': 'Token ' + authToken
            })
        })
        .map(res => res.json())
        .catch((error: Response) => {
            return Observable.throw(error);
        });
    }
}
