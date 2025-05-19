import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  API = environment.SERVIDOR + "/api/users";
  REGISTER_API = environment.SERVIDOR + "/api/register";

  constructor() { }

  listAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.REGISTER_API, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.API}/${user.id}`, {
      username: user.username,
      password: user.password,
      role: user.role
    });
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
} 