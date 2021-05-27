import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAJAXService {

  constructor(private http: HttpClient) { }

  private url: string = "https://swapi.dev/api/people/?format=json";

  pedirPersonajes() {
    console.log("Estoy en pedirPersonajes");
    return this.http.get<any>(this.url);
  }

  pedirUrl(link) {
    return this.http.get<any>(link);

  }

}
