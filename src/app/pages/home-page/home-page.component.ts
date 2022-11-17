import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  token: string | null = null;
  contactoSeleccionado: IRandomContact | undefined;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    // COMPROBAR SI EXISTE EL TOKEN EN EL SESSIONSTORAGE
    this.token = sessionStorage.getItem( "token" );
    // LEEMOS DEL ESTADO DEL HISTORIAL DE NAVEGACIÓN
    if( history.state.data ) {
      this.contactoSeleccionado = history.state.data;
    }
  }

  navegarAContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: "todos"
      }
    }
    this.router.navigate( ["/dashboard/contacts"], navigationExtras );
  }

}
