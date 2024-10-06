import { Component, OnInit } from '@angular/core';
import { ChurchService } from './services/church-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Morne se app';
  churchServices: any[] = [];

  constructor(private churchService: ChurchService) {}

  ngOnInit() {
    this.churchService.getChurchServices().subscribe((services: any[]) => {
      this.churchServices = services;
    });
  }
}