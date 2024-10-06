import { Component, OnInit } from '@angular/core';
import { ChurchService } from '../services/church-service.service';

@Component({
  selector: 'app-church-service-list',
  templateUrl: './church-service-list.component.html',
  styleUrls: ['./church-service-list.component.css']
})
export class ChurchServiceListComponent implements OnInit {
  churchServices: any[] = [];

  constructor(private churchService: ChurchService) {}

  ngOnInit() {
    this.churchService.getChurchServices().subscribe((services: any[]) => {
      this.churchServices = services;
    });
  }
}