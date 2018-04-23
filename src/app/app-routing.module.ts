import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { EmployeesComponent } from './core/employees/employees.component';
import { ProfileComponent } from './core/profile/profile.component';
import { StatsComponent } from './core/stats/stats.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
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
