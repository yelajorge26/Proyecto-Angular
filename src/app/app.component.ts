import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';

  token: string | null = null;

  constructor( private router: Router ) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem( "token" )
  }

  logout() {
    sessionStorage.removeItem( "token" );
    this.router.navigate( ["login"] );
  }
}






// PASO DE INFORMACIÓN ENTER COMPONENTES:
// 1. A TRAVÉZ DE @Inputs y @Output
// 2. A TRAVÉZ DE INYECCIÓN DE CONSTRUCTORES DE COMPONENTES HIJOS USANDO DECORADORES COMO @ViewChild, @ContentChild, @ContentChildren
// 3. A TRAVÉZ DE SERVICIOS (PROMESAS, OBSERVABLES, ETC) ---> NGGRX (GESTIÓN DEL ESTADO DE LA APLICACIÓN)
// 4. A TRAVÉZ DE PARAMETROS ENTRE RUTAS
