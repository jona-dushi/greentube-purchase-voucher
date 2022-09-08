import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseVoucherService } from 'src/app/services/purchase-voucher.service';

@Component({
  selector: 'app-purchase-voucher',
  templateUrl: './purchase-voucher.component.html',
  styleUrls: ['./purchase-voucher.component.scss']
})
export class PurchaseVoucherComponent implements OnInit {
  displayedColumns: string[] =['nameAndAddress', 'openingHours'];
  dataSource: any = [{nameAndAddress: 'Address', openingHours: '09:00 - 22.00'},
                      {nameAndAddress: 'Address', openingHours: '09:00 - 22.00'},
                      {nameAndAddress: 'Address', openingHours: '09:00 - 22.00'},
                      {nameAndAddress: 'Address', openingHours: '09:00 - 22.00'},
                      {nameAndAddress: 'Address', openingHours: '09:00 - 22.00'},
                      {nameAndAddress: 'Address', openingHours: '09:00 - 22.00'},
                      ];

  constructor(private _purchaseVoucherService: PurchaseVoucherService, private _router: Router) { }

  ngOnInit(): void {
  }

  onClickHandler() {
    this._purchaseVoucherService.purchaseVoucher()?.subscribe(response => {
      console.log(response);      
      this._router.navigate(['/voucher-purchase-success']);
    }, 
    error => {
      this._router.navigate(['/voucher-purchase-failed']);
    });
  }

}
