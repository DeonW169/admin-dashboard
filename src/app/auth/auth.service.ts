import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    token: string;
    private apiUrl = 'http://staging.tangent.tngnt.co/api-token-auth/';

    constructor(private router: Router, private http: Http) { }

    signinUser(username: string, password: string) {
        const userDetails: any = {};
        userDetails.username = username;
        userDetails.password = password;

        this.http.post(this.apiUrl, userDetails)
        .toPromise()
        .then((response) => {
            const res = JSON.parse(response['_body']);
            this.token = res.token;

            sessionStorage.setItem('token', this.token);

            this.router.navigate(['/employees']);
        })
        .catch(
            error => console.log(error)
        );
    }

    logout() {
        this.token = null;
        sessionStorage.clear();

        this.router.navigate(['/signin']);
    }

    getToken() {
        const authToken = sessionStorage.getItem('token');
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
