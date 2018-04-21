import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatSidenavModule,
  MatFormFieldModule
} from '@angular/material';
import { phoneRoutes } from './phone-rating.routes';

import { AuthService } from '../core/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PhonesComponent } from './phones/phones.component';
import { AddPhoneComponent } from './phones/add-phone/add-phone.component';

@NgModule({
  declarations: [
    PhonesComponent,
    AddPhoneComponent
  ],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatFormFieldModule,
    AngularFirestoreModule,
    phoneRoutes
  ],
  providers: [AuthService],
})
export class PhoneRatingModule { }
