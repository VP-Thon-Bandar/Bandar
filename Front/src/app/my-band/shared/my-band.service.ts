import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Band } from './band';

const URL_MYBAND: string = "http://192.168.29.24/api/band/0200e7cb-af8e-48b7-a4b9-0012b0fc5aa0"

@Injectable()
export class MyBandService {

  constructor(private http:Http) {
    console.log("INIT MYBAND SERVIRCE");
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

  getMyBand(): Observable<Band>  {
    console.log("HACIENDO REQUEST");
    return this.http.get(URL_MYBAND).map((response) => response.json())
  }
}