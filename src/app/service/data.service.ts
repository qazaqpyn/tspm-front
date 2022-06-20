import { Position } from './../position';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getUsersList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }

  getPositionsList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/positions');
  }

  createUser(data: User){
    return this.httpClient.post('http://127.0.0.1:8000/api/user', data);
  }

  deleteUser(data: any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/user/'+data);
  }

  getUser(data: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/user/'+data);
  }

  updateUser(id:any, data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/user/'+id, data);
  }

  createPosition(data: Position){
    return this.httpClient.post('http://127.0.0.1:8000/api/position', data);
  }

  deletePosition(id: any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/position/'+id);
  }

  getPosition(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/position/'+id);
  }

  updatePosition(id:any, data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/position/'+id, data);
  }
}
