import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChurchServiceService } from '../../services/church-service.service';
import { ChurchService } from '../../models/church-service.model';

@Component({
  selector: 'app-church-service-form',
  templateUrl: './church-service-form.component.html',
  styleUrls: ['./church-service-form.component.css']
})
export class ChurchServiceFormComponent implements OnInit {
  serviceForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private churchService: ChurchServiceService
  ) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.churchService.getChurchServiceById(Number(id)).subscribe(
        (service: ChurchService) => {
          this.serviceForm.patchValue(service);
        },
        (error) => {
          console.error('Error fetching church service:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      if (this.isEditMode) {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.churchService.updateChurchService(id, this.serviceForm.value).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error updating church service:', error);
          }
        );
      } else {
        this.churchService.createChurchService(this.serviceForm.value).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error creating church service:', error);
          }
        );
      }
    }
  }
}