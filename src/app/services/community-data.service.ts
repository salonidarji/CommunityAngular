import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommunityDataService {

  url = 'http://letsmeetbackend.herokuapp.com/community/';
  constructor(private _http: HttpClient) { }

  getAllCommunity() {

   return this._http.get(this.url);
  }

  addCommunity(fd: any) {
    return this._http.post(this.url, fd);
  }
}
