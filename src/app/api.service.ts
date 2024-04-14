import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { vehicle } from './model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getvehicle(): Observable<vehicle[]> {
    return this.http.get<any>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
}
}