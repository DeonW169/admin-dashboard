import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';

import { EmployeesService } from './employees.service';
import { ProfileService } from './profile.service';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective
    ],
    providers: [
        EmployeesService,
        ProfileService
    ]
})
export class SharedModule {}
