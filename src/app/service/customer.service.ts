import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../domain/customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge() {
    return this.http
      .get<any>('http://localhost:3000/data')
      // .toPromise()
      // .then((res) => <Customer[]>res.data)
      // .then((data) => {
      //   return data;
      // });
  }
}
