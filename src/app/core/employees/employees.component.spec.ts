import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Pipe, PipeTransform } from '@angular/core';

import { MockEmployeesService, MockFilterService } from '../../../test/mock';
import { EmployeeFilterPipe } from '../../shared/employee-filter.pipe';
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from '../../shared/employees.service';

describe('EmployeesComponent', () => {

    let fixture: any;
    let comp: any;

    beforeEach(() => {
        // Refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [EmployeesComponent, EmployeeFilterPipe],
            providers: [
                {provide: EmployeesService, useClass: MockEmployeesService}
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        // Create component and test fixture
        fixture = TestBed.createComponent(EmployeesComponent);

        // Get test component from test fixture
        comp = fixture.componentInstance;

    });

    it('should be defined', () => {
        expect(comp).toBeDefined();
    });

    describe('ngInit', () =>  {
        it('should fetch employeee info', () =>  {
            comp.ngOnInit();
        });
    });
});
