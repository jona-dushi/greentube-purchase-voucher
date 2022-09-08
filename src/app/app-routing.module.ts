import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseVoucherComponent } from './components/purchase-voucher/purchase-voucher.component';
import { VoucherPurchasedComponent } from './components/voucher-purchased/voucher-purchased.component';
import { VoucherPurchaseFailedComponent } from './components/voucher-purchase-failed/voucher-purchase-failed.component';
import { LoginComponent } from './components/login/login.component';
import { AppAuthGuardGuard } from './guards/app-auth-guard.guard';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "/login",
}, {
  path: "login",
  component: LoginComponent
}, {
  path: "purchase-voucher",
  canActivate: [AppAuthGuardGuard],
  component: PurchaseVoucherComponent
}, {
  path: "voucher-purchase-success",
  component: VoucherPurchasedComponent
}, {
  path: "voucher-purchase-failed",
  component: VoucherPurchaseFailedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
