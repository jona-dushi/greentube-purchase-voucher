import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseVoucherService {

  constructor(private _httpClient: HttpClient) { }

  protected getDefaultHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json').set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache')
      .set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
      .set('If-Modified-Since', '0')
      .set('X-Master-Key', '$2b$10$5eRbA9CLdvKK/tsB5BCKle8W9Hi1sAkzEUwFpobWnEbg8bPiY2BK6')
    return headers;
  }

  purchaseVoucher(): Observable<any> | undefined {
    return this._httpClient.get('https://api.jsonbin.io/v3/b/6311b2fde13e6063dc979a31', {headers: this.getDefaultHeaders() });
  }
}
