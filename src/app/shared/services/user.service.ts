import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from '../interfaces/interfaces';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { UsersComponent } from 'app/exercises/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private env:any=environment;

  constructor(private client:HttpClient) { }

  public getHeadersRESTToken(): HttpHeaders{
    let headers= new HttpHeaders();
    let token = localStorage.getItem("token");
    headers = headers.set('Content-Type', 'application/json').set('Authorization',token);
    return headers;
  }

  public getUsers():Observable<GenericResponse>{
    let token= localStorage.getItem("token");
    return this.client.get<GenericResponse>(this.env.baseUrl+"/user", {headers: this.getHeadersRESTToken()});
  }

  public getUserById(id: string): Observable<GenericResponse> {
    let token= localStorage.getItem("token");
    return this.client.get<GenericResponse>(`${this.env.baseUrl}/user/find/${id}`, { headers: this.getHeadersRESTToken() });
  }
  

  public addUser(name: string, email: string, role: string, password: string): Observable<GenericResponse> {
    let token = localStorage.getItem("token");
    const body = { name, email, role, password };
    return this.client.post<GenericResponse>(`${this.env.baseUrl}/user/add`, body, { headers: this.getHeadersRESTToken() });
  }
  

  public deleteUser(id: string): Observable<GenericResponse> {
    let token = localStorage.getItem("token");
    return this.client.delete<GenericResponse>(`${this.env.baseUrl}/user/delete/${id}`, {headers: this.getHeadersRESTToken()});
  }

  public updateUser(id: string, name: string, email: string, role: string, password: string): Observable<GenericResponse> {
    let token = localStorage.getItem("token");
    const body = { name, email, role, password };
    return this.client.put<any>(`${this.env.baseUrl}/user/update/${id}`, body, {headers: this.getHeadersRESTToken()});
  }
  
}
