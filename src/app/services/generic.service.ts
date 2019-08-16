import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnServerString } from './urlmaker.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  public server: ReturnServerString = new ReturnServerString();

  constructor(public http: HttpClient) {}

  public getPopular(type) {
    return this.http.get(this.server.urlPopular(type));
  }
  
  public getPerson(param, type) {
    return this.http.get(this.server.urlSingle(type, param));
  }

  public searchItem(param, url) {
    return this.http.get(this.server.urlSearch(url, param));
  }

  public getTrending(type, param) {
    return this.http.get(this.server.urlTrending(type, param));
  }

  public getDetail(param, type) {
    return this.http.get(this.server.urlDetail(type, param));
  }

  public getAllCredits(param, type) {
    return this.http.get(this.server.urlCredit(type, param));
  }

  public getSingleCredit(param, type) {
    return this.http.get(this.server.urlSingle(type, param));
  }

}
