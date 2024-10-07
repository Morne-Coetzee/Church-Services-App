import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChurchServiceService } from '../../services/church-service.service';
import { ChurchService } from '../../models/church-service.model';

@Component({
  selector: 'app-church-service-detail',
  templateUrl: './church-service-detail.component.html',
  styleUrls: ['./church-service-detail.component.css']
})
export class ChurchServiceDetailComponent implements OnInit {
  service: ChurchService | undefined;

  constructor(
    private route: ActivatedRoute,
    private churchService: ChurchServiceService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.churchService.getChurchServiceById(id).subscribe(
      (service: ChurchService) => {
        this.service = service;
      },
      (error) => {
        console.error('Error fetching church service:', error);
      }
    );
  }
}