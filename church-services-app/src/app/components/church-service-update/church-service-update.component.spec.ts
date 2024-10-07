import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchServiceUpdateComponent } from './church-service-update.component';

describe('ChurchServiceUpdateComponent', () => {
  let component: ChurchServiceUpdateComponent;
  let fixture: ComponentFixture<ChurchServiceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchServiceUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchServiceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
