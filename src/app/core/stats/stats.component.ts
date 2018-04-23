import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { EmployeesService } from '../../shared/employees.service';
import { Employee } from '../../shared/employee';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
@Injectable()
export class StatsComponent implements OnInit {
    employees: any = [];
    numberOfEmployees: Number;
    numberOfMaleEmployees: Number = 0;
    numberOfFemaleEmployees: Number = 0;
    nextBirthdays: any = [];

    private subscription: Subscription;

    constructor(private employeesService: EmployeesService) { }

    ngOnInit() {
        this.employeesService.getEmployees().subscribe(
            (employees: Employee[]) => {
                this.employees = employees;
                this.numberOfEmployees = this.employees.length;

                this.getUpcomingBirthdays();
                this.getGenderEmployees();
        });
    }

    getUpcomingBirthdays() {
        this.nextBirthdays = this.employees.sort(this.dynamicSort('days_to_birthday'));
    }

    getGenderEmployees() {
        const emps = this.employees;
        let males = 0;
        let females = 0;

        for (let i = 0; i < emps.length; i++) {
            if (emps[i].gender === 'M') {
                males += 1;
            }
            if (emps[i].gender === 'F') {
                females += 1;
            }
        }

        this.numberOfMaleEmployees = males;
        this.numberOfFemaleEmployees = females;
    }

    dynamicSort(property) {
        let sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }
}
