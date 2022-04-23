import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { LanguagesService } from 'src/app/services/languages/languages.service';
import { Language } from '../../types/language.type';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent {
  languages: Array<Language> = new Array<Language>();
  languageSelected: Language;
  confirmText: string;
  cancelText: string;

  constructor(
    private translateService: TranslateService,
    private languagesService: LanguagesService,
    private iab: InAppBrowser
  ) {
    this.languages = this.languagesService.getLanguages();
    this.languageSelected = this.languagesService.getCurrentLanguage();
  }

  async ionViewWillEnter(){
    await this.getTexts();
  }

  async getTexts(){
    this.confirmText = await this.translateService.get('CONFIRM').toPromise();
    this.cancelText = await this.translateService.get('CANCEL').toPromise();
  }

  async onChangeLanguage(){
    await this.languagesService.setCurrentLanguage(this.languageSelected.code);
    await this.getTexts();
  }

  onOpenTerms(){
    const currentLanguage = this.languageSelected.code;
    const urlTerms = `https://github.com/savi8sant8s/savi8sant8s/blob/main/quadro-tatico-futsal-termos-${currentLanguage}.md`;
    this.iab.create(urlTerms, '_system');
  }

  onOpenProVersion(){

  }

  onCreatedBy(){
    this.iab.create('mailto:saviosa08@gmail.com', '_system');
  }

  onExitApp(){
    App.exitApp();
  }
}
