import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Properties } from '../properties/property.state'


type SuccessfulLogin = {
  jwttoken: string
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  verifyLogin(email: string, password: string): Observable<SuccessfulLogin> {
    return this.http.post<SuccessfulLogin>(`https://alpha.buyproperly.ca/api/user/v1/login`, { email, password })
  }

  fetchProperties(limit: number, offset: number): Observable<Properties> {
    return this.http.post<Properties>(`https://alpha.buyproperly.ca/api/search/v1`, { limit, offset })
  }

  fetchProperty(slurp : string): Observable<any> {
    return this.http.get<any>(`https://alpha.buyproperly.ca/api/property/v1/details/slurp/${slurp}`)

  }

}