import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {

  }

  /*region Roles HTTP call*/
  sendApi(data: any): Observable<any> {
    return this.httpClient.get(`${baseUrl}/7f434df6-a4ac-4817-ab7c-dd39a564d01d`, { observe: 'response' })
  }
  getDetails(): Observable<any> {
    return this.httpClient.get(`${baseUrl}/611a3036-4420-48a5-b8da-9b461853cdd2`, { observe: 'response' });
  }

}