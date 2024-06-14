import { Component } from '@angular/core';
import { DatasService } from '../dataservice/datas.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent {
 

  students:any=[
    {
      name:"neenu",
      age:27,
    },
    {
      name:"meenu",
      age:30
    },
    {
      name:"seenu",
      age:28,
    }
  ]

  usernames:string="";

  constructor(private ds:DatasService){
    this.usernames = this.ds.username
  }
}
