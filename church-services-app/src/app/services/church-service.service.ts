import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ChurchService {
    private apiUrl = `${environment.apiUrl}/church-services`;

    constructor(private http: HttpClient) { }

    getChurchServices(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    createChurchService(service: any): Observable<any> {
        return this.http.post(this.apiUrl, service);
    }

    updateChurchService(id: number, service: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, service);
    }

    deleteChurchService(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}