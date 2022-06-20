import { User } from './../../user';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  positions:any;
  user = new User();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.getPositionsList();
  }

  getUsersList(){
    this.dataService.getUsersList().subscribe(res=>{
      this.users = res;
    })
  }

  getPositionsList(){
    this.dataService.getPositionsList().subscribe(res=>{
      this.positions = res;
    })
  }
  createUser(){
    this.dataService.createUser(this.user).subscribe((res: any)=>{
      this.user = new User();
      this.getUsersList();
    })
  }

  deleteUser(id: any){
    this.dataService.deleteUser(id).subscribe(res=>{
      this.getUsersList();
    });
  }

}
