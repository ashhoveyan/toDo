import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  getData(url:string) {
    return this.http.get(url);
  }

  create(url:string, data:any){
    return this.http.post(url, data)
  }
  edit(url:string, data:any){
    return this.http.put(url, data)
  }
  delete(url:string){
    return this.http.delete(url);
  }

}
