import { Component, inject } from '@angular/core';
import { GestionmodalService } from '../../../services/gestion_modal/gestionmodal.service';
import { Skills } from '../../../models/skills';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {

  gestionModal = inject(GestionmodalService)

  skills:Skills[]=[{
    nombre:'Angular',
    img:'./assets/logo/angular.svg'
  },
  {
    nombre:'Python (FastApi)',
    img:'./assets/logo/python.svg'
  },
  {
    nombre:'PHP',
    img:'./assets/logo/php.png'
  },
  {
    nombre:'MySQL',
    img:'./assets/logo/mysql.svg'
  },
  {
    nombre:'Docker',
    img:'./assets/logo/docker.svg'
  },
  {
    nombre:'MongoDB',
    img:'./assets/logo/mongo.svg'
  },]

}
