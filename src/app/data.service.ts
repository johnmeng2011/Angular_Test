import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }
  
  getUsers(){

    var data  = this.http.get("https://jsonplaceholder.typicode.com/users");
    return data;

  }
}
