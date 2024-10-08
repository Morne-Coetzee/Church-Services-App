import { Component, OnInit } from '@angular/core';
import { ChurchServiceService } from './services/church-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  services: any[] = [];

  constructor(private churchService: ChurchServiceService) { }

  ngOnInit(): void {
    this.churchService.getAllServices().subscribe(
      (services: any[]) => {
        this.services = services;
      },
      (error: any) => {
        console.error('Error fetching services', error);
      }
    );
  }
}