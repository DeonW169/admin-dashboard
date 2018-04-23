import { TestBed, inject, async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule, Http ],
        providers: [ HttpTestingController, ProfileService ]});
    });

    // it('should be created', async(inject([HttpTestingController, ProfileService],
    //     (httpClient: HttpTestingController, service: ProfileService) => {
    //       expect(service).toBeTruthy();
    // })));
});
