import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShCatalogsService {

  private readonly urlBase = '/api/';
  
  constructor(private httpClient: HttpClient) { }
  
  /***PRODUCTS***/
  getProducts(): Observable<any>{
    return this.httpClient.get<any>(this.urlBase + 'getProducts');
  }
  saveProduct(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'saveProduct',data);
  }
  deleteProduct(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'deleteProduct',data);
  }

  /*** UNIT OF MEASUREMENT ***/
  getMeasurementUnits(): Observable<any>{
    return this.httpClient.get<any>(this.urlBase + 'getMeasurementUnits');
  }
  saveMeasurementUnit(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'saveMeasurementUnit',data);
  }
  deleteMeasurementUnit(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'deleteMeasurementUnit',data);
  }

  /*** TYPE OF PRODUCTS ***/
  getTypeOfProducts(): Observable<any>{
    return this.httpClient.get<any>(this.urlBase + 'getTypeOfProducts');
  }
  saveTypeOfProduct(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'saveTypeOfProduct',data);
  }
  deleteTypeOfProduct(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'deleteTypeOfProduct',data);
  }

  /*** CLASSIFICATIONS ***/
  getClassifications(): Observable<any>{
    return this.httpClient.get<any>(this.urlBase + 'getClassifications');
  }
  saveClassifications(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'saveClassifications',data);
  }
  deleteClassifications(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'deleteClassifications',data);
  }

  /*** PROVIDERS ***/
  getProviders(): Observable<any>{
    return this.httpClient.get<any>(this.urlBase + 'getProviders');
  }
  saveProvider(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'saveProvider',data);
  }
  deleteProvider(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'deleteProvider',data);
  }
}