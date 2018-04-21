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
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  
    name: string;
    title: string;
    properties: string;
    description: string;
  
    constructor(private afs: AngularFirestore) { }
  
    ngOnInit() {
    }
  
    addPhone() {
      this.afs.collection('phones').add({'name': this.name, 'title': this.title, 'properties': this.properties, 'description': this.description});
    }

}
