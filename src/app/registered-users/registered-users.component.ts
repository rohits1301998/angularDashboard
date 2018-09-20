import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {
  registeredUsers:Observable<any>;
  p: number = 1;
  constructor(private firebase:FirebaseService) { }

  ngOnInit() {
    this.registeredUsers = this.firebase.getData('/users');
  }

}
