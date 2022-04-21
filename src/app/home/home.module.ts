import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { OptionsPanelComponent } from '../components/options-panel/options-panel.component';
import { FutsalPlayerComponent } from '../components/futsal-player/futsal-player.component';
import { FormationComponent } from '../components/formation/formation.component';
import { PlayerThemeComponent } from '../components/player-theme/player-theme.component';
import { CourtThemeComponent } from '../components/court-theme/court-theme.component';
import { CourtComponent } from '../components/court/court.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    OptionsPanelComponent,
    CourtComponent,
    FutsalPlayerComponent,
    FormationComponent,
    PlayerThemeComponent,
    CourtThemeComponent
]
})
export class HomePageModule {}
