import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { ChurchServiceService } from './services/church-service.service'; // Corrected path

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Morne se app';
  churchServices: any[] = [];
  menuItems: NbMenuItem[] = [
    {
      title: 'Services',
      link: '/services',
      icon: 'home-outline',
    },
    {
      title: 'Create Service',
      link: '/services/create',
      icon: 'plus-outline',
    },
  ];

  constructor(private churchService: ChurchServiceService) {}

  ngOnInit() {
    this.churchService.getAll().subscribe((services: any[]) => {
      this.churchServices = services;
    });
  }
}