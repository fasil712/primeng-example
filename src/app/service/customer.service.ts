import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../domain/customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<any>('http://localhost:3000/Countries');
  }
  getComments() {
    return this.http.get<any>('http://localhost:3000/comments');
  }
  addComments(data: any) {
    return this.http.post<any>('http://localhost:3000/comments', data);
  }
  updateComments(id: number, comment: any) {
    return this.http.put<any>('http://localhost:3000/comments/' + id, comment);
  }
  deletComments(id: number) {
    return this.http.delete<any>('http://localhost:3000/comments/' + id);
  }
}
