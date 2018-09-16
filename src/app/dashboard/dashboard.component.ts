import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visitedUsersObservable: Observable<any>;
  countOfUsers:string="Loading...";
  constructor(private db: AngularFireDatabase) { }
 
  ngOnInit() { 
      this.visitedUsersObservable = this.getUsers('/visited-users');
      this.visitedUsersObservable.subscribe((data)=>{
          console.log(Object.keys(data).length);
          this.countOfUsers = Object.keys(data).length + "";
      });

  }

  getUsers(usersPath): Observable<any[]> {
    return this.db.list(usersPath).valueChanges();
  }

}
