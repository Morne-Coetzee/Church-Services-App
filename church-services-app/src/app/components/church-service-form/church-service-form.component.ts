import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChurchServiceService } from '../../services/church-service.service';
import { ChurchService } from '../../models/church-service.model';

@Component({
  selector: 'app-church-service-form',
  templateUrl: './church-service-form.component.html',
  styleUrls: ['./church-service-form.component.scss']
})
export class ChurchServiceFormComponent implements OnInit {
  serviceForm!: FormGroup;
  serviceId: number | null = null;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private churchService: ChurchServiceService
  ) { }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceId = Number(id);
      this.isEditMode = true;
      this.churchService.getServiceById(this.serviceId).subscribe(
        (service: ChurchService) => {
          this.serviceForm.patchValue(service);
        },
        (error: any) => {
          console.error('Error fetching service', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      if (this.serviceId !== null) {
        this.churchService.updateService(this.serviceId, this.serviceForm.value).subscribe(
          () => {
            this.router.navigate(['/services']);
          },
          (error: any) => {
            console.error('Error updating service', error);
          }
        );
      } else {
        this.churchService.createService(this.serviceForm.value).subscribe(
          () => {
            this.router.navigate(['/services']);
          },
          (error: any) => {
            console.error('Error creating service', error);
          }
        );
      }
    }
  }
}