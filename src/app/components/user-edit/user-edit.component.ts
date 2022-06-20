import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id:any;
  data: any;
  positions: any;
  user = new User();

  constructor(private route: ActivatedRoute, private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser();
    this.getPositionsList();
  }

  getUser(){
    this.dataService.getUser(this.id).subscribe(res=>{
      this.data = res;
      this.user = this.data;
    })
  }

  getPositionsList(){
    this.dataService.getPositionsList().subscribe(res=>{
      this.positions = res;
    })
  }

  updateUser(){
    this.dataService.updateUser(this.id, this.user).subscribe(res=>{
      this.router.navigate(['/']);
    })
  }
}
