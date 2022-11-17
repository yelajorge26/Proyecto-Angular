import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.scss']
})
export class ContactsDetailPageComponent implements OnInit {

  id: any | undefined;
  contacto: IRandomContact | undefined;
  filtroPrevio: string = "todos";

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      ( params: any ) => {
        if(params.id ) {
          this.id = params.id
        }
      }
    );

    // VOLVEMOS A LEER TAMBIÉN EL STATE DEL CONTACTO
    if( history.state.data && history.state.filtro ) {
      this.contacto = history.state.data;
      this.filtroPrevio = history.state.filtro;
    }
  }

}
