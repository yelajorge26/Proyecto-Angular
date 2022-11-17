import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private router: Router ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // SI RETORNA TRUE  -> SI SE CARGA LA RUTA
    // SI RETORNA FALSE -> NO SE CARGA LA RUTA

    let token = sessionStorage.getItem( "token" );

    if(token){
      return true;
    } else {
      this.router.navigate( ["login"] );
      return false;
    }
  
  }
  
}
