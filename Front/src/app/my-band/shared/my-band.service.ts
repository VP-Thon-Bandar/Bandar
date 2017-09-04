import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Band } from './band';

const URL_MYBAND: string = "http://192.168.29.24/api/user"

@Injectable()
export class MyBandService {

  constructor(private http:Http) {
    console.log("INIT MYBAND SERVIRCE");
  }

  getBand(id: string): Observable<any>  {
    console.log("HACIENDO REQUEST");
    return this.http.get(URL_MYBAND + "/" + id).map((response) => response.json())
  }

  agregar(body: Object) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("POST REQUEST");
    return this.http.post(URL_MYBAND, body, {headers: headers}).map((response) => response.json());
  }
  
  borrar(id: string): Observable<Band> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("DELETE REQUEST");
    return this.http.delete(URL_MYBAND + "/" + id, {headers: headers});
  }

  modificar(body: any): Observable<Band> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("PUT REQUEST");
    return this.http.put(URL_MYBAND + "/" + body._id, body, {headers: headers});
  }
}