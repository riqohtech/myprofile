import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'

interface Phone {
  name: string;
  title: string;
  properties: string;
  description: string;
}

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phoneCollection: AngularFirestoreCollection<Phone>;
  phones: Observable<Phone[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.phoneCollection = this.afs.collection('phones');
    this.phones = this.phoneCollection.valueChanges();
  }

}
