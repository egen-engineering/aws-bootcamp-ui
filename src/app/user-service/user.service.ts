import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { environment } from "../../environments/environment";

@Injectable()
export class UserService {

  url = environment.host + '/users';

  constructor(private http: Http) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  getUserById(userId): Observable<any> {
    return this.http.get(`${this.url}/${userId}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  addUser(user): Observable<any> {
    return this.http.post(this.url, user)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  editUser(userId, user): Observable<any> {
    return this.http.put(`${this.url}/${userId}`, user)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  deleteUser(userId): Observable<any> {
    return this.http.delete(`${this.url}/${userId}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }
}
