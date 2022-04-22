import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { LanguagesService } from 'src/app/services/languages/languages.service';
import { Language } from '../../types/language.type';

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
    private languagesService: LanguagesService
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

  }

  onOpenProVersion(){

  }
}
