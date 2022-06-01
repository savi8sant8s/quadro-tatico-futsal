import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';
import { TranslateService } from '@ngx-translate/core';

import { LanguagesService } from '../../services';
import { Language } from '../../types';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent {
  languages: Language[] = new Array<Language>();
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

  async ionViewWillEnter(): Promise<void> {
    await this.getTexts();
  }

  async getTexts(): Promise<void> {
    this.confirmText = await this.translateService.get('CONFIRM').toPromise();
    this.cancelText = await this.translateService.get('CANCEL').toPromise();
  }

  async onChangeLanguage(): Promise<void> {
    await this.languagesService.setCurrentLanguage(this.languageSelected.code);
    await this.getTexts();
  }

  onOpenTerms(): void {
    const currentLanguage = this.languageSelected.code;
    const urlTerms = `https://github.com/prancheta-apps/termos/blob/main/quadro-tatico-futsal-${currentLanguage}.md`;
    this.iab.create(urlTerms, '_system');
  }

  async onShare(): Promise<void> {
    const title = await this.translateService.get('SHARE_TITLE').toPromise();
    const text = await this.translateService.get('SHARE_MESSAGE').toPromise();
    const url = 'https://play.google.com/store/apps/details?id=com.prancheta.quadrotaticodefutsal';
    const dialogTitle = await this.translateService.get('SHARE').toPromise();

    await Share.share({ title, text, url, dialogTitle });
  }

  onRate(): void {
    this.iab.create('https://play.google.com/store/apps/details?id=com.prancheta.quadrotaticodefutsal', '_system');
  }

  onContactUs(): void {
    this.iab.create('mailto:saviosa08@gmail.com', '_system');
  }

  onExitApp(): void {
    App.exitApp();
  }
}
