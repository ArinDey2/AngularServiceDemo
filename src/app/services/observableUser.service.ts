import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../../models/User';

@Injectable({
    providedIn: 'root'
})
export class ObservableUserService {

    users: User[];

    constructor() {
        this.users = [
            { name: 'Amitabh Bachhan', city: 'Mumbai' },
            { name: 'Priyanka Chopra', city: 'New Delhi' },
            { name: 'Denzel Washington', city: 'Hollywood' }
        ];
    }
    getUsers(): Observable<User[]> {
        return of(this.users);
    }

}
