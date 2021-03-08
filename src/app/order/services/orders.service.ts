import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../models/provider';

@Injectable()
export class ProvidersService {
  baseURL: string = 'http://localhost:5000/api'
  constructor(private http: HttpClient) {}

  getAllProviders(): Observable<Array<Provider>> {
    return this.http.get<Array<Provider>>(
      this.baseURL + '/providers'
    );
  }

  getProvider(providerId: number): Observable<Provider>{
    return this.http.get<Provider>(
      this.baseURL + `/providers/${providerId}?includeCatalogueItems=${true}`
    );
  }
}
