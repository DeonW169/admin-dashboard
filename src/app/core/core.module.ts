import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { EmployeeFilterPipe } from '../shared/employee-filter.pipe';
import { EmployeesComponent } from './employees/employees.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        EmployeeFilterPipe,
        EmployeesComponent,
        ProfileComponent,
        StatsComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        AuthService
    ]
})
export class CoreModule {}
