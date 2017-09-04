import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const URL_TIMELINE: string = "http://192.168.29.24/api/timeline"

@Injectable()
export class TimelineService {

  constructor(private http:Http) {
    console.log("INIT TIMELINE SERVIRCE");
  }

  get(): Observable<any>  {
    console.log("GET REQUEST");
    return this.http.get(URL_TIMELINE).map((response) => response.json())
  }  
}