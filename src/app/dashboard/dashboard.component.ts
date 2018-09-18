import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  countOfUsers:string="Loading...";
  constructor(private firebase:FirebaseService) { }
 
  ngOnInit() { 
      this.firebase.setVisitedUsers('/zipCodesEntered');
      this.firebase.visitedUsersObservable.subscribe((data)=>{
        console.log(Object.keys(data).length);
        this.countOfUsers = Object.keys(data).length + "";
    });

  }

 

}
