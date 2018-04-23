import { Observable } from 'rxjs';

const data: any = {};
const employees: any = [];

export class MockEmployeesService {

    employeeChanged = {
        subscribe: () => {}
    };

    getEmployees(): Observable<any[]> {
        return Observable.of(employees);
    }

    private handleData(res: any) {
        return 'foobar';
    }

    handleError(err) {
        return true;
    }
}

export class MockProfileService {

    profileChanged = {
        subscribe: () => {}
    };

    getProfile() {
        return new Promise((resolve) => { resolve({}); });
    }

    private handleData(res: any) {
        return 'foobar';
    }

    handleError(err) {
        return true;
    }
}

export class MockFilterService {
    applyFilter() {
        return true;
    }
}
