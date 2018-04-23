import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProfileService } from '../../shared/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profileDetails: any = {};

    private subscription: Subscription;

    constructor(private profileService: ProfileService) { }

    ngOnInit() {
        this.profileService.getProfile()
        .then(user => this.profileDetails = user );

        this.subscription = this.profileService.profileChanged
        .subscribe(
        (user: any[]) => {
            this.profileDetails = user;
        });
    }
}
