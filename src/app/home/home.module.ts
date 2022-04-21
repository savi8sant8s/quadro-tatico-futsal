import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { OptionsPanelComponent } from '../components/options-panel/options-panel.component';
import { FutsalCourtComponent } from '../components/futsal-court/futsal-court.component';
import { FutsalPlayerComponent } from '../components/futsal-player/futsal-player.component';
import { FormationComponent } from '../components/formation/formation.component';
import { PlayerThemeComponent } from '../components/player-theme/player-theme.component';
import { FieldThemeComponent } from '../components/field-theme/field-theme.component';


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
    FutsalCourtComponent,
    FutsalPlayerComponent,
    FormationComponent,
    PlayerThemeComponent,
    FieldThemeComponent
]
})
export class HomePageModule {}
