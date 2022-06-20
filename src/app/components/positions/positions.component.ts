import { Position } from './../../position';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: any;
  position = new Position;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPositionsList();
  }

  getPositionsList(){
    this.dataService.getPositionsList().subscribe(res=>{
      this.positions = res;
    })
  }

  createPosition(){
    this.dataService.createPosition(this.position).subscribe((res: any)=>{
      this.position = new Position();
      this.getPositionsList();
    })
  }

  deletePosition(id: any){
    this.dataService.deletePosition(id).subscribe(res=>{
      this.getPositionsList();
    });
  }

}
