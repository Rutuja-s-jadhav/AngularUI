import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecOption } from './models/spec-option';



@Injectable({
  providedIn: 'root'
})
export class SpecService {
  baseApiUrl= "http://localhost:5078/";
  constructor(private httpClient: HttpClient) { }


  getSpec(): Observable<SpecOption[]> {
    return this.httpClient.get<SpecOption[]>(
      this.baseApiUrl + 'GetSpec_option'
    );
  }

  editSpec(id: number, request: any): Observable<any> {
    return this.httpClient.put<any>(this.baseApiUrl + 'Edit/'+ id, {
      status: request,
    });
  }
  // http://localhost:5078/Edit/3

  saveFormData(data: any) {
    // console.log(data);
    return this.httpClient.post(this.baseApiUrl + 'AddSpec_Option', data);
  }
}
