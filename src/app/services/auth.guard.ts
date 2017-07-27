import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable ()
export class AuthGuard implements CanActivate {
  
  
  constructor ( private _authService : AuthService,
                private router : Router ) {
  }
  
  canActivate ( next : ActivatedRouteSnapshot,
                state : RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {
    if ( !this._authService.isLoggin () ) {
      this.router.navigate ( [ 'home' ] );
    }
    return this._authService.isLoggin ();
  }
}
