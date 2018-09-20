import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'; 
@Injectable()
export class FirebaseService {
  
  constructor(private db: AngularFireDatabase) { }

  getData(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
     
  }

  
}
