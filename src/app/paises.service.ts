import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  listar(){
      return this.http.get<any[]>(this.url);
  }

}
