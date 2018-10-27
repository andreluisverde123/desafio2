import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  URL = 'http://localhost:8080/contacts'

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get(this.URL)
  }

  post(data) {
    return this.http.post(this.URL, data)
  }

  put(id, data) {
    return this.http.put(`${this.URL}/${id}`, data)
  }

  delete(id) {
    return this.http.delete(`${this.URL}/${id}`)
  }
}
