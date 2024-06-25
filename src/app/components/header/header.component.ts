import { Component, inject } from '@angular/core';
import { Social } from '../../models/social';
import { GestionmodalService } from '../../services/gestion_modal/gestionmodal.service';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  gestionModal = inject(GestionmodalService)

  redes_sociales:Social[]=[{
    nombre:`linkedIn`,
    img:'./assets/logo/linkedin.svg',
    link:'https://www.linkedin.com/in/antonio-jose-sanchez-gonzalez/'
  },{
    nombre:`GitHub`,
    img:'./assets/logo/github.svg',
    link:'https://github.com/AJSanchez8'
  }]

  webs=[{
    url:'https://pokeamigo.ajsanchez.com',
    nombre:'Pokedex',

  }]

}
