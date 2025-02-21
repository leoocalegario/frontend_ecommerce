import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  @Injectable({
    providedIn: 'root'
  })
  export class LogService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/loglist";

  constructor() { }

  listAll(): Observable<Log[]>{
    return this.http.get<Log[]>(this.API+"/listAll");
  }
}
