import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LocationsService } from '../services/locations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-map',
  templateUrl: './events-map.component.html',
  styleUrls: ['./events-map.component.css']
})
export class EventsMapComponent implements OnInit {


  sites: any;
  markers = [];
  lat = -1.2707065;
  lng = 36.7238279;
  zoom = 8;

  book = false;
  isOpen = false;

  constructor(private locationsService: LocationsService,
              private router: Router) {}

  ngOnInit() {
    // this.locationsService.getSites().subscribe((sites: any) => {
    //   // console.log(sites.sites);
    //   this.sites = sites.sites;
    //   for (let i = 0; i < 5; i++) {
        this.markers.push({
            lat: -1.5707065,
            lng: 37.7238279,
            draggable: false
        });
    //   }
    // });
  }

  markerClicked(event) {
    console.log(event);
    this.isOpen = !this.isOpen;
    // this.book = true;
  }

  viewEvent() {
    console.log('event seen');
    this.router.navigate(['/hallmap']);
  }
}
