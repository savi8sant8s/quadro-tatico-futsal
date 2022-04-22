import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesService } from 'src/app/services/languages/languages.service';
import { Language } from 'src/app/types/language.type';
import { Storage } from '@capacitor/storage';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  languages: Array<Language> = new Array<Language>();
  languageSelected: Language;

  constructor(
    private translateService: TranslateService,
    private languagesService: LanguagesService,
    private modalCtrl: ModalController
  ) {
    this.languages = this.languagesService.getLanguages();
    this.languageSelected = this.languagesService.findLanguageByCode(this.translateService.defaultLang);
  }

  onSelectLanguage(){
    this.translateService.use(this.languageSelected.code);
  }

  async onAcceptTerms(){
    await Storage.set({
      key: 'acceptedTerms',
      value: 'true'
    });
    this.modalCtrl.dismiss();
  }
}
