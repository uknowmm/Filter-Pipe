import { Component, OnInit } from '@angular/core';
import { Userdetail } from './userdetail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchText='';
  userinfo=[];
constructor(private data:Userdetail){}
ngOnInit(){
  this.data.onReceive()
  .subscribe((resdetail)=>this.userinfo=resdetail);
}
}
