/**
 * Employee entity, used for filtering.
 */

export class Employee {
    user: Object = {
        first_name: String,
        last_name: String
    };
    name: string;
    surname: string;
    birthday: Date;
    email: string;
    phone: number;
    position: Object = {
        level: String,
        name: String
    };
}
