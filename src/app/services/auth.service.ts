import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, Subscription } from "rxjs";


@Injectable()
export class AuthService {
  private readonly apiurl: String = "https:///api.instagram.com/";
  private readonly apiurl1: String ="https://graph.instagram.com/{11.0}/{1198766634273548}";
  private readonly apiurl2: String ="https://graph.instagram.com/11.0/1198766634273548";

  constructor(private http: HttpClient) {}
  
  
  /*
  getHandlingar(): Observable<Handling[]> {
    return this.http.get<Handling[]>(`${this.beUrl}/handlingar`);
  }
  getReport(): Observable<Report> {
    return this.http.get<Report>(`${this.beUrl}/report`);
  }*/


/*
  String GET_URL = "https://graph.instagram.com/{11.0}/{bo_ris_sve_son}" +
                  "?fields={fields}" +
          "&access_token={access-token}";
*/

  testL(): Observable<any> {
    return this.http.get<any>(`${this.apiurl1}`);
  }

  testL2(): Observable<any> {
    return this.http.get<any>(`${this.apiurl2}`);
  }
}
