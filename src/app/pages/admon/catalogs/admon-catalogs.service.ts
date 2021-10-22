import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmonCatalogsService {
  private readonly urlBase = '/api/';

  constructor(private httpClient: HttpClient) { }

  //CUSTOMERS
  getCustomers(): Observable<any>{
    return this.httpClient.get<any>(this.urlBase + 'getCustomers');
  }
  
  saveCustomer(data): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'saveCustomer?name=' + data.name        +
                                                        '&description='  + data.description +      
                                                        '&userId='       + data.userId      +      
                                                        '&status='       + data.status      ,data);
  }

  deleteCustomer(id:number): Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'deleteCustomer?id=' + id ,id);
  }
  
}