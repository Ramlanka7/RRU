import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RegisterRenterComponent } from './RegisterRenter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterRenterService {
    private _url = 'http://localhost:60712/api/Account/GetUserDetails';

    names: Array<string>;
    constructor(private http: Http) {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }

    public getUserInfo(): Observable<{}> {
        return this.http.get(this._url)
            .map((response: Response) => <any[]>response.json());
    };
}