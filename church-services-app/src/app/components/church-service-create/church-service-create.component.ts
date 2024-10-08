import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChurchServiceService } from '../../services/church-service.service';

@Component({
  selector: 'app-church-service-create',
  templateUrl: './church-service-create.component.html',
  styleUrls: ['./church-service-create.component.scss']
})
export class ChurchServiceCreateComponent implements OnInit {
  serviceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private churchServiceService: ChurchServiceService
  ) { }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      this.churchServiceService.createService(this.serviceForm.value).subscribe(() => {
        this.router.navigate(['/services']);
      });
    }
  }
}