import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  // public getHttpTraces(): Observable<any>{
  //   return this._http.get( this.serverURL+"httptrace");
  // }

  public getFunction(urlPath: String): Observable<any> {
    return this._http.get(`${environment.baseApi}/${urlPath}`);
  }
}
