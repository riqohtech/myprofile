import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public auth: AuthService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.userCollection = this.afs.collection('users');
    this.users = this.userCollection.valueChanges();
  }

}
