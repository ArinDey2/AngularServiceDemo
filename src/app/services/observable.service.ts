import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableService {

    data: Observable<any>;

    constructor() {
    }

    test() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 1000);

            setTimeout(() => {
                observer.next(2);
            }, 2000);

            setTimeout(() => {
                observer.next(3);
            }, 3000);

            setTimeout(() => {
                observer.next({ name: 'Amitabh' });
            }, 4000);
        });

        return this.data;
    }
}
