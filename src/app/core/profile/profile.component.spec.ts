import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MockProfileService } from '../../../test/mock';
import { ProfileService } from '../../shared/profile.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {

    let fixture: any;
    let comp: any;

    beforeEach(() => {
        // Refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            providers: [
                {provide: ProfileService, useClass: MockProfileService},
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        // Create component and test fixture
        fixture = TestBed.createComponent(ProfileComponent);

        // Get test component from test fixture
        comp = fixture.componentInstance;
    });

    it('should be defined', () => {
        expect(comp).toBeDefined();
    });

    describe('ngInit', () =>  {
        it('should fetch profile info', () =>  {
            comp.ngOnInit();
        });
    });
});
