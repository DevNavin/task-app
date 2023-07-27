import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserSessionService } from './user-session.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  tempCanActivate: boolean = false
  constructor(public userSessionService: UserSessionService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.userSessionService.isLoggedIn()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}