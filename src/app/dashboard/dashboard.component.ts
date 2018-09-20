import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visitedUsersObservable: Observable<any>;
  registeredUsersObservable:Observable<any>
  countOfUsers:string="Loading...";
  countOfRegisteredUsers:string="Loading...";
  constructor(private firebase:FirebaseService) { }
 
  ngOnInit() {
    //visited users count 
      this.visitedUsersObservable = this.firebase.getData('/zipCodesEntered');
      this.visitedUsersObservable.subscribe((data)=>{
        console.log(Object.keys(data).length);
        this.countOfUsers = Object.keys(data).length + "";
    });

    //registered users count
    this.registeredUsersObservable = this.firebase.getData('/users');
    this.registeredUsersObservable.subscribe((data)=>{
      console.log(Object.keys(data).length);
      this.countOfRegisteredUsers = Object.keys(data).length + "";
  });
  }
  
 

}
