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

  constructor(
    private translateService: TranslateService,
    private languagesService: LanguagesService
  ) {
    this.languages = this.languagesService.getLanguages();
    this.languageSelected = this.languagesService.findLanguageByCode(this.translateService.defaultLang);
  }

  onChangeLanguage(){
    this.translateService.use(this.languageSelected.code);
  }

  onOpenTerms(){

  }

  onOpenProVersion(){

  }
}
