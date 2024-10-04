import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchServiceListComponent } from './church-service-list.component';

describe('ChurchServiceListComponent', () => {
  let component: ChurchServiceListComponent;
  let fixture: ComponentFixture<ChurchServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchServiceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
