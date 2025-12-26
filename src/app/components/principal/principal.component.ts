import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { GestionmodalService } from '../../services/gestion_modal/gestionmodal.service';
import { CardsExperienciaComponent } from '../cards-experiencia/cards-experiencia.component';
import { CardsNoRelacionadoComponent } from '../cards-no-relacionado/cards-no-relacionado.component';
import {MatMenuModule} from '@angular/material/menu';



@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatTooltipModule,CardsExperienciaComponent,CardsNoRelacionadoComponent, MatMenuModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  gestionModal = inject(GestionmodalService)
}
 