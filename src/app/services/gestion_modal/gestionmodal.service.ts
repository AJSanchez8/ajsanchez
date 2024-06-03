import { Injectable } from '@angular/core';
import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HabilidadesComponent } from '../../components/modals/habilidades/habilidades.component';

@Injectable({
  providedIn: 'root'
})
export class GestionmodalService {

  constructor(public dialog: MatDialog) {}


  dialog_habilidades:any
  openDialog_habilidades() {
    this.dialog_habilidades = this.dialog.open(HabilidadesComponent);
  }
  close_habilidades(){
    this.dialog_habilidades.close()
  }
}
