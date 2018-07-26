import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCardOfficeComponent } from './delivery-card-office.component';

describe('DeliveryCardOfficeComponent', () => {
  let component: DeliveryCardOfficeComponent;
  let fixture: ComponentFixture<DeliveryCardOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCardOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCardOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
