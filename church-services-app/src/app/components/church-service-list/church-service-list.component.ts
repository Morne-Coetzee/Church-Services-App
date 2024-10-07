import { Component, OnInit } from '@angular/core';
import { ChurchServiceService } from '../../services/church-service.service';
import { ChurchService } from '../../models/church-service.model';

@Component({
  selector: 'app-church-service-list',
  templateUrl: './church-service-list.component.html',
  styleUrls: ['./church-service-list.component.css']
})
export class ChurchServiceListComponent implements OnInit {
  churchServices: ChurchService[] = [];

  constructor(private churchService: ChurchServiceService) { }

  ngOnInit(): void {
    this.churchService.getAllChurchServices().subscribe(
      (services: ChurchService[]) => {
        this.churchServices = services;
      },
      (error) => {
        console.error('Error fetching church services:', error);
      }
    );
  }

  editService(id: number | undefined): void {
    if (id !== undefined) {
      // Navigate to edit form
    }
  }

  deleteService(id: number | undefined): void {
    if (id !== undefined) {
      this.churchService.deleteChurchService(id).subscribe(
        () => {
          this.churchServices = this.churchServices.filter(service => service.id !== id);
        },
        (error) => {
          console.error('Error deleting church service:', error);
        }
      );
    }
  }
}