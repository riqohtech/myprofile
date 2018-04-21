import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CoreModule } from './core/core.module';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EventsMapComponent } from './events-map/events-map.component';
import { HallMapComponent } from './hall-map/hall-map.component';
import { RegisterComponent } from './register/register.component';
import { LocationsService } from './services/locations.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashHomeComponent } from './dashboard/dash-home/dash-home.component';
import { DashTableComponent } from './dashboard/dash-table/dash-table.component';
import { DashFormsComponent } from './dashboard/dash-forms/dash-forms.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventsMapComponent,
    HallMapComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    DashHomeComponent,
    DashTableComponent,
    DashFormsComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    OverlayModule,
    A11yModule,
    CdkTableModule,
    MatTableModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqDNb3-Xnp9xvbxCot_Iukc_dRQnSzyP8'
    }),
    appRoutes,
    Angular2FontawesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    CoreModule,
  ],
  providers: [LocationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
