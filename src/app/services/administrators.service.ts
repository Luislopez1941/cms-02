import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Global } from '../global/GLOBAL';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministratorsService {
  url: any
  constructor(
    private http: HttpClient
  ) { 
    this.url = Global.url
  }

  customer_login(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'administrator_login', data, { headers: headers });
  }
}
