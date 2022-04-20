import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormationType } from 'src/app/types/formation.type';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  formations: Array<FormationType> = new Array<FormationType>();
  formationSelected = '1-2-2';

  constructor(
    private modal: ModalController
  ) {
    this.formations.push({name: '1-2-2',   imageUrl: 'assets/1-2-2.svg'});
    this.formations.push({name: '1-3-1',   imageUrl: 'assets/1-3-1.svg'});
    this.formations.push({name: '1-1-2-1',   imageUrl: 'assets/1-1-2-1.svg'});
    this.formations.push({name: '1-1-1-2',   imageUrl: 'assets/1-1-1-2.svg'});
   }

  ngOnInit() {}

  async closeModal(){
    await this.modal.dismiss();
  }

  selectFormation(name){
    this.formationSelected = name;
  }

  async confirmOption(){
    await this.modal.dismiss(this.formationSelected);
  }
}
