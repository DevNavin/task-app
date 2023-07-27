import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  public isLoggedInEventEmitter: Subject<boolean> = new Subject()
  constructor(private router: Router) { }

  setSessionAndLogin(jwtToken: string) {
    sessionStorage.setItem("token", jwtToken)
    this.isLoggedInEventEmitter.next(true)
    this.router.navigate(['profile'], { replaceUrl: true })
  }

  isLoggedIn() {
    const jwtToken = sessionStorage.getItem("token");
    return (jwtToken && jwtToken !== "")
  }

  logOut() {
    this.isLoggedInEventEmitter.next(false)
    this.router.navigate(['home']);
    sessionStorage.clear()
  }


}
