import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'; 
@Injectable()
export class FirebaseService {
  visitedUsersObservable: Observable<any>;
  constructor(private db: AngularFireDatabase) { }

  setVisitedUsers(usersPath): Observable<any[]> {
    this.visitedUsersObservable = this.db.list(usersPath).valueChanges();
    return this.visitedUsersObservable;
  }

}
