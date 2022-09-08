import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherPurchasedComponent } from './voucher-purchased.component';

describe('VoucherPurchasedComponent', () => {
  let component: VoucherPurchasedComponent;
  let fixture: ComponentFixture<VoucherPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherPurchasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
