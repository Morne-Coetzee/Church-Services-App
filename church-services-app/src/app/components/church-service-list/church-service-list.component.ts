import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChurchServiceService } from '../../services/church-service.service';

@Component({
  selector: 'app-church-service-list',
  templateUrl: './church-service-list.component.html',
  styleUrls: ['./church-service-list.component.scss']
})
export class ChurchServiceListComponent implements OnInit {
  services: any[] = [];

  constructor(private churchService: ChurchServiceService, private router: Router) { }

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

  deleteService(id: number): void {
    this.churchService.deleteService(id).subscribe(
      () => {
        this.services = this.services.filter(service => service.id !== id);
      },
      (error: any) => {
        console.error('Error deleting service', error);
      }
    );
  }

  editService(id: number): void {
    this.router.navigate(['/services', id, 'edit']);
  }

  createService(): void {
    this.router.navigate(['/services/create']);
  }
}