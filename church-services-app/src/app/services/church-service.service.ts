import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChurchService } from '../models/church-service.model';

@Injectable({
    providedIn: 'root'
})
export class ChurchServiceService {
    private apiUrl = 'http://localhost:8080/services';

    constructor(private http: HttpClient) { }

    getAllServices(): Observable<ChurchService[]> {
        return this.http.get<ChurchService[]>(this.apiUrl);
    }

    getServiceById(id: number): Observable<ChurchService> {
        return this.http.get<ChurchService>(`${this.apiUrl}/${id}`);
    }

    createService(service: ChurchService): Observable<ChurchService> {
        return this.http.post<ChurchService>(this.apiUrl, service);
    }

    updateService(id: number, service: ChurchService): Observable<ChurchService> {
        return this.http.put<ChurchService>(`${this.apiUrl}/${id}`, service);
    }

    deleteService(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}