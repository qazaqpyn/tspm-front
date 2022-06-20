import { DataService } from './../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from './../../position';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {
  id:any;
  data:any;
  position= new Position();

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPosition();
  }

  getPosition(){
    this.dataService.getPosition(this.id).subscribe(res=>{
      this.data = res;
      this.position = this.data;
    })
  }

  updatePosition(){
    this.dataService.updatePosition(this.id, this.position).subscribe(res=>{
      this.router.navigate(['/positions']);
    })
  }

}
