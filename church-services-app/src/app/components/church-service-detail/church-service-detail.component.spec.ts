import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchServiceDetailComponent } from './church-service-detail.component';

describe('ChurchServiceDetailComponent', () => {
  let component: ChurchServiceDetailComponent;
  let fixture: ComponentFixture<ChurchServiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchServiceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
