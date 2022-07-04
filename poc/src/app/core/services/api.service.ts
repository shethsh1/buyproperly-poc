import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
}