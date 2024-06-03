import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Tarjeta } from '../../models/tarjeta';
import { Social } from '../../models/social';
import { GestionmodalService } from '../../services/gestion_modal/gestionmodal.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  

  cards:Tarjeta[]=[{
    titulo:'experiencia',
    descripcion:'Consulta mi experiencia en el sector de la programación. (Y en otros sectores)',
    img:'./assets/img/cards/'
  },
  {
    titulo:'sobre mi ',
    descripcion:'Descubre un poco más sobre de mi, mis aficiones y gustos',
    img:'./assets/img/cards/'
  }]

  redes_sociales:Social[]=[{
    nombre:`linkedIn`,
    img:'./assets/logo/linkedin.svg',
    link:'https://www.linkedin.com/in/antonio-jose-sanchez-gonzalez/'
  },{
    nombre:`GitHub`,
    img:'./assets/logo/github.svg',
    link:'https://github.com/AJSanchez8'
  }]

  gestionModal = inject(GestionmodalService)

}
 