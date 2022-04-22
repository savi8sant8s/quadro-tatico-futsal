import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PanelComponent } from '../../components/panel/panel.component';
import { PlayerComponent } from '../../components/player/player.component';
import { FormationComponent } from '../../components/formation/formation.component';
import { PlayerThemeComponent } from '../../components/player-theme/player-theme.component';
import { CourtThemeComponent } from '../../components/court-theme/court-theme.component';
import { CourtComponent } from '../../components/court/court.component';
import { TranslateModule } from '@ngx-translate/core';
import { MoreComponent } from 'src/app/components/more/more.component';
import { BackModalComponent } from 'src/app/components/back-modal/back-modal.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule
  ],
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
    WelcomeComponent
]
})
export class HomePageModule {}
