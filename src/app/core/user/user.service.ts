import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { IDTO } from '../DTO/dto.types';
import { IUser } from './user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'https://reqres.in/api/users';
  private users: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([])

  /**
   * getter for Users
   */

  get user$(): Observable<IUser[]> {
    return this.users.asObservable();
  }


  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IDTO>(this.baseUrl).pipe(
      switchMap(res => {
        this.users.next(res.data);
        return of(res.data)
      })
    )
  }

  createUser(user: IUser): Observable<IUser> {
    return this.user$.pipe(
      take(1),
      switchMap(usrs =>
        this.httpClient.post<IUser>(this.baseUrl, user).pipe(
          map(user => {
            this.users.next([...usrs, user])
            return user;
          })
        )
      )
    )
  }



}
