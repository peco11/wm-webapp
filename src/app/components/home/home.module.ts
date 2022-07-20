import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CardComponent} from './card/card.component';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {HomeComponent} from './home.component';
import {InnerHtmlComponent} from '../project/project.page.component';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {PipeModule} from 'src/app/pipes/pipe.module';
import {SearchComponent} from './search/search.component';
import {TranslateModule} from '@ngx-translate/core';
import {WMCommonModule} from '../common/wm-common.module';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SearchComponent,
    InnerHtmlComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    PipeModule,
    WMCommonModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
