import { Component } from '@angular/core';
import { DatasService } from '../dataservice/datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  names:string="";
  getcc:string="";
  colorss:string="color:green";
  twoway:any="hey";
  box:boolean=false;

  constructor(private ds:DatasService,private router:Router){}

  getname(myname:any){
    this.names= myname.value
  }

  getc(event:any){
    this.getcc=event.target.value
  }

  boxx(){
    if(this.names){
      this.ds.username = this.names;
    }
    this.box=true;
    this.router.navigateByUrl('d')
  }

}
