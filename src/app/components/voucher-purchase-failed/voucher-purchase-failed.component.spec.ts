import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherPurchaseFailedComponent } from './voucher-purchase-failed.component';

describe('VoucherPurchaseFailedComponent', () => {
  let component: VoucherPurchaseFailedComponent;
  let fixture: ComponentFixture<VoucherPurchaseFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherPurchaseFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherPurchaseFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
