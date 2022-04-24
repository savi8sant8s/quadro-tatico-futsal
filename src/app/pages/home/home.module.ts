import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import {
  BackModalComponent,
  CourtThemeComponent,
  CourtComponent,
  FormationComponent,
  MoreComponent,
  PanelComponent,
  PlayerThemeComponent,
  PlayerComponent,
} from '../../components';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, TranslateModule],
  declarations: [
    HomePage,
    PanelComponent,
    CourtComponent,
    PlayerComponent,
    FormationComponent,
    PlayerThemeComponent,
    CourtThemeComponent,
    MoreComponent,
    BackModalComponent,
  ],
})
export class HomePageModule {}
