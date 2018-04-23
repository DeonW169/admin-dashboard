import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, Http ],
            providers: [ HttpTestingController, EmployeesService]
        });
    });

    // it('should be created', async(inject([HttpTestingController, EmployeesService],
    //     (httpClient: HttpTestingController, service: EmployeesService) => {
    //       expect(service).toBeTruthy();
    // })));
});
