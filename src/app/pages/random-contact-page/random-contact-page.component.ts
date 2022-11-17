import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {

  contact: IRandomContact | undefined;

  constructor( private randomUserService: RandomUserService ) { }

  ngOnInit(): void {
    this.randomUserService.obtenerRandomContact().subscribe(( response: Results ) => {
      this.contact = response.results[0]; // SE LO PASAMOS AL RANDOM CONTACT
    });
  }

  obtenerNuevoContacto() {
    
    // FORMA ANTIGUA DE TRATAR LA SUSCRIPCIÓN AL SERVICIO GET
    // this.randomUserService.obtenerRandomContact().subscribe(
    //   ( response: Results ) => {
    //     this.contact = response.results[0]; // SE LO PASAMOS AL RANDOM CONTACT
    //   },
    //   ( error ) => console.error( error )
    // );

    // FORMA ACTUAL DE RESOLVER LA SUSCRIPCIÓN A PETICIÓN GET.
    this.randomUserService.obtenerRandomContact().subscribe(
      {
        next: ( response: Results ) => {
          this.contact = response.results[0]; // SE LO PASAMOS AL RANDOM CONTACT
        },
        error: ( error ) => console.error( error ),
        complete: () => console.info( "Peticiónde rndom contat terminada" )
      }
    );
  }

  obtenerListaContactos( n: number ) {
    this.randomUserService.obtenerRandomContacts( n ).subscribe(
      {
        next: ( response: Results ) => {
          console.log( response );
        },
        error: ( error ) => console.error( error ),
        complete: () => console.info( "Peticiónde rndom contat terminada" )
      }
    );
  }

}
