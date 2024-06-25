import { Component } from '@angular/core';
import { Experiencia } from '../../models/experiencia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-experiencia.component.html',
  styleUrl: './cards-experiencia.component.css'
})
export class CardsExperienciaComponent {

  array_empresas:Experiencia[]=[
  {
    img:'./assets/img/empresas/logo_vn.jpg',
    titulo:'VIEWNEXT S.A.', 
    fecha_inicio:'19-02-2024',
    fecha_fin:'Actualidad',
    aprendizaje:[
      'Inteligencia Artificial',
      'Angular',
      'Python',
    ],
    bg:''
  },{
    img:'./assets/img/empresas/logo-seyte.png',
    titulo:'SEYTE', 
    fecha_inicio:'01-05-2023',
    fecha_fin:'01-07-2023',
    aprendizaje:[
      'Angular',
      'PHP',
      'Laravel'
    ],
    bg:'bg-gradient-to-r from-gradiente_seyte_1 via-gradiente_seyte_2 to-gradiente_seyte_3'
  },]

}
