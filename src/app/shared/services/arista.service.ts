import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from '../interfaces/interfaces';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class AristaService {
    private env:any=environment;
  
    constructor(private client:HttpClient) { }
  
    public getHeadersRESTToken(): HttpHeaders{
      let headers= new HttpHeaders();
      let token = localStorage.getItem("token");
      headers = headers.set('Content-Type', 'application/json').set('Authorization',token);
      return headers;
    }
  
    public getAristas():Observable<GenericResponse>{
      let token= localStorage.getItem("token");
      return this.client.get<GenericResponse>(this.env.baseUrl+"/arista", {headers: this.getHeadersRESTToken()});
    }

    public addArista(aristaId:string, origin: string, destiny: string, weight: number): Observable<GenericResponse> {
      let token = localStorage.getItem("token");
      const body = {aristaId, origin, destiny, weight};
      return this.client.post<GenericResponse>(`${this.env.baseUrl}/arista/add`, body, { headers: this.getHeadersRESTToken() });
    }

    public deleteArista(id: string): Observable<GenericResponse> {
      let token = localStorage.getItem("token");
      return this.client.delete<GenericResponse>(`${this.env.baseUrl}/arista/delete/${id}`, {headers: this.getHeadersRESTToken()});
    }

  }