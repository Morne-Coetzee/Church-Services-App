import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchServiceCreateComponent } from './church-service-create.component';

describe('ChurchServiceCreateComponent', () => {
  let component: ChurchServiceCreateComponent;
  let fixture: ComponentFixture<ChurchServiceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchServiceCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
