import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from '../interfaces/interfaces';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class CityService {
    private env:any=environment;
  
    constructor(private client:HttpClient) { }
  
    public getHeadersRESTToken(): HttpHeaders{
      let headers= new HttpHeaders();
      let token = localStorage.getItem("token");
      headers = headers.set('Content-Type', 'application/json').set('Authorization',token);
      return headers;
    }
  
    public getCities():Observable<GenericResponse>{
      let token= localStorage.getItem("token");
      return this.client.get<GenericResponse>(this.env.baseUrl+"/city", {headers: this.getHeadersRESTToken()});
    }

    public addCity(idlocal: number, name: string, latitude: number, longitude: number): Observable<GenericResponse> {
      let token = localStorage.getItem("token");
      const body = {idlocal, name, latitude, longitude};
      return this.client.post<GenericResponse>(`${this.env.baseUrl}/city/add`, body, { headers: this.getHeadersRESTToken() });
    }

    public deleteCity(id: string): Observable<GenericResponse> {
      let token = localStorage.getItem("token");
      return this.client.delete<GenericResponse>(`${this.env.baseUrl}/city/delete/${id}`, {headers: this.getHeadersRESTToken()});
    }

  }