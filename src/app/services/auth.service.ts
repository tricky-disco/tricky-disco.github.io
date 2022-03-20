import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, Subscription } from "rxjs";


@Injectable()
export class AuthService {
  private readonly apiurl1: String ="https://graph.instagram.com/{11.0}/{1198766634273548}";
  private readonly apiurl2: String ="https://graph.instagram.com/11.0/1198766634273548";

  private readonly apiurl3: String ="https://graph.facebook.com/oauth/access_token?client_id={1198766634273548}&client_secret={0d5f146a56821ba5f41b2c1c12238e78}&grant_type=client_credentials";
  private readonly apiurl4: String ="https://graph.facebook.com/oauth/access_token?client_id=1198766634273548&client_secret=0d5f146a56821ba5f41b2c1c12238e78&grant_type=client_credentials";

  private readonly apiurl5: String = "https://api.instagram.com/oauth/authorize?client_id=1198766634273548&redirect_uri=https://tricky-disco.github.io/#/success&scope=user_profile,user_media&response_type=code";

  
  constructor(private http: HttpClient) {}

  /*
  "https://graph.facebook.com/oauth/access_token
  ?client_id={your-app-id}
  &client_secret={your-app-secret}
  &grant_type=client_credentials"
  */

  testL(): Observable<any> {
    return this.http.get<any>(`${this.apiurl1}`);
  }

  testL2(): Observable<any> {
    return this.http.get<any>(`${this.apiurl2}`);
  }

  testL3(): Observable<any> {
    return this.http.get<any>(`${this.apiurl3}`);
  }

  testL4(): Observable<any> {
    return this.http.get<any>(`${this.apiurl4}`);
  }

  testL5(): Observable<any> {
    return this.http.get<any>(`${this.apiurl5}`);
  }

}
