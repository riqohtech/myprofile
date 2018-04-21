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
  template: `
    <h1>Add phone</h1>
    <div class="example-container">
      <mat-form-field>
          <input matInput [(ngModel)]="name" placeholder="Name">
      </mat-form-field>
    
        <mat-form-field>
            <input matInput [(ngModel)]="title" placeholder="Title">
        </mat-form-field>

        <mat-form-field>
            <textarea matInput [(ngModel)]="properties" placeholder="Properties"></textarea>
        </mat-form-field>

        <mat-form-field>
        <textarea matInput [(ngModel)]="description" placeholder="Description"></textarea>
        </mat-form-field>
    </div>
  `,

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
