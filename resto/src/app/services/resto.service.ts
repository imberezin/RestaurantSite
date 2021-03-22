import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Resto } from '../resto';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/restaurants';

  getList(){
    console.log("test test");
    return this.http.get(this.url);
  }

  saveResto(data: Resto){
    console.log(data);
    return this.http.post(this.url,data);
  }

  deleteResto(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id:number, data:Resto){
    return this.http.put(`${this.url}/${id}`, data);

  }
}
