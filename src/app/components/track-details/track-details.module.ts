import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PipeModule} from 'src/app/pipes/pipe.module';
import {SwiperModule} from 'swiper/angular';

import {GalleryComponent} from './gallery/gallery.component';
import {ModalGalleryComponent} from './modal-gallery/modal-gallery.component';
import {TrackDescriptionComponent} from './track-description/track-description.component';
import {TrackDetailsComponent} from './track-details.component';
import {TrackDownloadUrlsComponent} from './track-download-urls/track-download-urls.component';
import {TrackElevationChartComponent} from './track-elevation-chart/track-elevation-chart.component';
import {TrackPoiComponent} from './track-poi/track-poi.component';
import {TrackTechnicalDataComponent} from './track-technical-data/track-technical-data.component';
import {TrackRelatedUrlsComponent} from './track-related-urls/track-related-urls.component';

@NgModule({
  declarations: [
    TrackDetailsComponent,
    TrackTechnicalDataComponent,
    TrackDownloadUrlsComponent,
    TrackDescriptionComponent,
    TrackElevationChartComponent,
    TrackPoiComponent,
    GalleryComponent,
    ModalGalleryComponent,
    TrackRelatedUrlsComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule, PipeModule, SwiperModule],
  exports: [TrackDetailsComponent],
})
export class TrackDetailsModule {}
