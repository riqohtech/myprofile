import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Site {
  longitude: number;
  latitude: number;
}

@Injectable()
export class LocationsService {

  constructor(private http: HttpClient) { }

  getSites() {
    return this.http.get('http://localhost:4000/rbapi/site');
  }

}
