import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';

import { Language } from '../../types';
@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private languages: Language[] = new Array<Language>();

  constructor(private translateService: TranslateService) {
    this.languages.push({ name: 'Português do Brasil', code: 'pt-br' });
    this.languages.push({ name: 'English', code: 'en' });
    this.languages.push({ name: 'Español', code: 'es' });
  }

  getLanguages(): Language[] {
    return this.languages;
  }

  getLanguagesCodes(): string[] {
    return this.languages.map((l) => l.code);
  }

  getCurrentLanguage(): Language {
    return this.languages.find((l) => l.code === this.translateService.getDefaultLang());
  }

  async setCurrentLanguage(code: string): Promise<void> {
    await Storage.set({ key: 'language', value: code });
    this.translateService.setDefaultLang(code);
  }
}
