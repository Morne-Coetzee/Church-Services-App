import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchServiceFormComponent } from './church-service-form.component';

describe('ChurchServiceFormComponent', () => {
  let component: ChurchServiceFormComponent;
  let fixture: ComponentFixture<ChurchServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchServiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
