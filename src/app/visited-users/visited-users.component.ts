import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-visited-users',
  templateUrl: './visited-users.component.html',
  styleUrls: ['./visited-users.component.scss']
})
export class VisitedUsersComponent implements OnInit {
  visitedUsers:Observable<any>;
  constructor(private firebase:FirebaseService) { }

  ngOnInit() {
    //console.log(this.firebase.visitedUsersObservable);
    this.visitedUsers = this.firebase.setVisitedUsers('/zipCodesEntered');
    this.visitedUsers.subscribe((data)=>{
      console.log(data);
    });
    
  }

}
