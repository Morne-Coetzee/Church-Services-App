import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchServiceDeleteComponent } from './church-service-delete.component';

describe('ChurchServiceDeleteComponent', () => {
  let component: ChurchServiceDeleteComponent;
  let fixture: ComponentFixture<ChurchServiceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchServiceDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchServiceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
