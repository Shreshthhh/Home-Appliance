import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appliance } from './appliance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  private appBaseUrl = "http://localhost:8080/api/v0/appliance";

  constructor(private httpClient: HttpClient) { }

  getAllAppliances(): Observable<Appliance[]> {
    return this.httpClient.get<Appliance[]>(`${this.appBaseUrl + "/all"}`);
  }

  createAppliance(appliance: Appliance): Observable<Appliance> {
    return this.httpClient.post<Appliance>(`${this.appBaseUrl}`, appliance);
  }
  getApplianceById(applianceId: String): Observable<Appliance> {
    return this.httpClient.get<Appliance>(`${this.appBaseUrl}/${applianceId}`);
  }

  updateApplianceById(applianceId: String, appliance: Appliance): Observable<Appliance> {
    return this.httpClient.put<Appliance>(`${this.appBaseUrl}/${applianceId}`, appliance);
  }

  deleteAppliances(applianceIds: any) : Observable<any> {
    return this.httpClient.delete<any>(`${this.appBaseUrl}`, applianceIds);
  }

  deleteAppliance(applianceId: any) : Observable<any> {
    return this.httpClient.delete<any>(`${this.appBaseUrl}/${applianceId}`);
  }


}
  