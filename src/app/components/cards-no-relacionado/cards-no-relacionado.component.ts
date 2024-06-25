import { Component } from '@angular/core';
import { Experiencia } from '../../models/experiencia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-no-relacionado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-no-relacionado.component.html',
  styleUrl: './cards-no-relacionado.component.css'
})
export class CardsNoRelacionadoComponent {

  array_empresas:Experiencia[]=[{
    img:'./assets/img/empresas/logo_almeriavertical.jpg',
    titulo:'Almería Vertical', 
    fecha_inicio:'15-06-2022',
    fecha_fin:'18-07-2023',
    aprendizaje:[
      'Realización de diversas actividades en el medio natural.',

    ],
    bg:''
  },
  {
    img:'./assets/img/empresas/logo_junta.jpg',
    titulo:'Junta de Andalucía', 
    fecha_inicio:'15-06-2021',
    fecha_fin:'15-09-2021',
    aprendizaje:[
      'Controles de aforo y asistencia en época COVID.',

    ],
    bg:''
  },
  {
    img:'./assets/img/empresas/logo_cooperacion2005.png',
    titulo:'COOPERACION 2005, S.L.', 
    fecha_inicio:'25-07-2017',
    fecha_fin:'01-06-2018',
    aprendizaje:[
      'Socorrismo en playas de toda Almería.',
      'Actividades deportivas a personas de edad avanzada, monitor de actividades deportivas.'
    ],
    bg:''
  }]

}
