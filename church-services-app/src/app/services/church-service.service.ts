import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChurchService } from '../models/church-service.model';

@Injectable({
    providedIn: 'root'
})
export class ChurchServiceService {
    private apiUrl = 'http://localhost:8080/api/church-services';

    constructor(private http: HttpClient) { }

    getAllChurchServices(): Observable<ChurchService[]> {
        return this.http.get<ChurchService[]>(this.apiUrl, { headers: { 'Accept': 'application/json' } }).pipe(
            catchError(this.handleError)
        );
    }

    getChurchServiceById(id: number): Observable<ChurchService> {
        return this.http.get<ChurchService>(`${this.apiUrl}/${id}`, { headers: { 'Accept': 'application/json' } }).pipe(
            catchError(this.handleError)
        );
    }

    createChurchService(service: ChurchService): Observable<ChurchService> {
        return this.http.post<ChurchService>(this.apiUrl, service, { headers: { 'Accept': 'application/json' } }).pipe(
            catchError(this.handleError)
        );
    }

    updateChurchService(id: number, service: ChurchService): Observable<ChurchService> {
        return this.http.put<ChurchService>(`${this.apiUrl}/${id}`, service, { headers: { 'Accept': 'application/json' } }).pipe(
            catchError(this.handleError)
        );
    }

    deleteChurchService(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: { 'Accept': 'application/json' } }).pipe(
            catchError(this.handleError)
        );
    }

    getAll(): Observable<ChurchService[]> {
        return this.http.get<ChurchService[]>(this.apiUrl).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('An error occurred:', error.message);
        return throwError('Something went wrong; please try again later.');
    }
}