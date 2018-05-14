import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { EmployeesComponent } from './core/employees/employees.component';
import { ProfileComponent } from './core/profile/profile.component';
import { StatsComponent } from './core/stats/stats.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'employees', component: EmployeesComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'stats', component: StatsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
