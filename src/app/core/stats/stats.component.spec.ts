// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { StatsComponent } from './stats.component';

// describe('StatsComponent', () => {
//     let component: StatsComponent;
//     let fixture: ComponentFixture<StatsComponent>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//         declarations: [ StatsComponent ]
//         })
//         .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(StatsComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
// });


import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {

    let fixture: any;
    let comp: any;

    beforeEach(() => {
        // Refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [StatsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        // Create component and test fixture
        fixture = TestBed.createComponent(StatsComponent);

        // Get test component from test fixture
        comp = fixture.componentInstance;
    });

    // it('should be defined', () => {
    //     expect(comp).toBeDefined();
    // });

    // describe('ngInit', () =>  {
    //     it('should fetch profile info', () =>  {
    //         comp.ngOnInit();
    //     });
    // });
});
