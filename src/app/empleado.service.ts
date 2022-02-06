import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseURL = "http://localhost:8081/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
}
