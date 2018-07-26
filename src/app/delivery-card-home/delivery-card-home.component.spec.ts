import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCardHomeComponent } from './delivery-card-home.component';

describe('DeliveryCardHomeComponent', () => {
  let component: DeliveryCardHomeComponent;
  let fixture: ComponentFixture<DeliveryCardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
