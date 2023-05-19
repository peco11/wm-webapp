import {ConvertToHorizontalScrollBoxItemsPipe} from './horizontal-scroll-box/convert-to-horizontal-scroll-box.pipe';
import {BoxComponent} from './box/box.component';
import {CommonModule} from '@angular/common';
import {ConvertToItemTracksPipe} from './tracks-box/convert-to-base-box.pipe';
import {ImageModalComponent} from './image-modal/image-modal.component';
import {IonicModule} from '@ionic/angular';
import {LayerBoxComponent} from './layer-box/layer-box.component';
import {NgModule} from '@angular/core';
import {PipeModule} from 'src/app/pipes/pipe.module';
import {PoiBoxComponent} from './poi-box/poi-box.component';
import {RelatedUrlsComponent} from './related-urls.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {TitleComponent} from './title/title.component';
import {TrackAudioComponent} from './track-audio/track-audio.component';
import {TracksBoxComponent} from './tracks-box/tracks-box.component';
import {HorizontalScrollBoxComponent} from './horizontal-scroll-box/horizontal-scroll-box.component';

const components = [
  TitleComponent,
  RelatedUrlsComponent,
  ImageModalComponent,
  SearchBoxComponent,
  LayerBoxComponent,
  TracksBoxComponent,
  PoiBoxComponent,
  BoxComponent,
  ConvertToItemTracksPipe,
  TrackAudioComponent,
  HorizontalScrollBoxComponent,
  ConvertToHorizontalScrollBoxItemsPipe,
];
@NgModule({
  declarations: components,
  imports: [CommonModule, PipeModule, IonicModule],
  exports: components,
})
export class WMCommonModule {}
