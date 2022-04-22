import { Injectable } from '@angular/core';
import { Language } from 'src/app/types/language.type';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private languages: Array<Language> = new Array<Language>();

  constructor() {
    this.languages.push({name: 'Português do Brasil', code: 'pt-br'});
    this.languages.push({name: 'English', code: 'en'});
    this.languages.push({name: 'Español', code: 'es'});
  }

  getLanguages(): Array<Language> {
    return this.languages;
  }

  getLanguagesCodes(){
    return this.languages.map(l => l.code);
  }

  findLanguageByCode(code: string): Language {
    return this.languages.find(l => l.code === code);
  }
}
