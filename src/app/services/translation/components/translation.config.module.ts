import {NgModule} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@NgModule({
  imports: [TranslateModule.forRoot()],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class TranslationConfigModule {
  constructor(
    private readonly translate: TranslateService
  ) {
    this.setup();
  }

  private setup() {
    const en = 'en';
    const hu = 'hu';
    const languages = [en, hu]
    this.translate.addLangs(languages);
    this.translate.setDefaultLang(en);
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang === hu ? hu : en);
    languages.forEach(language => {
      const i18n = require(`../../../../assets/i18n/${language}.json`);
      this.translate.setTranslation(language, i18n);
    })
  }
}
