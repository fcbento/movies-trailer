import { Injectable } from '@angular/core';
import { ApiModel } from '../models/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public api: ApiModel;

  constructor(public http: HttpClient) { 
    this.api = new ApiModel();
  }

  public getTrailer(trailerName) {
    const q = trailerName;
    const params = '&part=snippet&q=' + q + '&maxResults=12';
    return this.http.get(this.api.BASE_URL_YOUTUBE + this.api.YOUTUBE_API_KEY + params);
  }

}
