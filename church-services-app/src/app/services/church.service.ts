import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChurchService {
    private apiUrl = 'http://localhost:8080/api/church-services';

    constructor(private http: HttpClient) { }

    getChurchServices(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}