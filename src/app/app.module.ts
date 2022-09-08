import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { PurchaseVoucherComponent } from './components/purchase-voucher/purchase-voucher.component';
import { VoucherPurchasedComponent } from './components/voucher-purchased/voucher-purchased.component';
import { VoucherPurchaseFailedComponent } from './components/voucher-purchase-failed/voucher-purchase-failed.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { AppAuthGuardGuard } from './guards/app-auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PurchaseVoucherComponent,
    VoucherPurchasedComponent,
    VoucherPurchaseFailedComponent,
    AppAuthGuardGuard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
