import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesService } from '../../shared/employees.service';
import { Employee } from '../../shared/employee';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
@Injectable()
export class EmployeesComponent implements OnInit {
    employees: any = [];
    numberOfEmployees: number;

    filter: Employee = new Employee();

    constructor(private employeesService: EmployeesService) { }

    ngOnInit() {
        this.employeesService.getEmployees().subscribe(
            (employees: Employee[]) => {
                this.employees = employees;
                this.numberOfEmployees = this.employees.length;
        });
    }
}
