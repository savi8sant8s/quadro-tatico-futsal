import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IClose } from 'src/app/interfaces/close.interface';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements IClose{
  languages: Array<string>;
  languageSelected: string;

  constructor(
    private modalCtrl: ModalController,
    private translateService: TranslateService
  ) {
    this.languageSelected = this.translateService.defaultLang;
    this.languages = this.translateService.getLangs();
    console.log(this.languages);
  }

  async onClose(){
    await this.modalCtrl.dismiss();
  }

  onChangeLanguage(){
    this.translateService.use(this.languageSelected);
  }
}
