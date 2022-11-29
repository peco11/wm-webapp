interface ITHEME {
  danger?: string;
  dark?: string;
  defaultFeatureColor?: string;
  fontFamilyContent?: string;
  fontFamilyHeader?: string;
  fontLg?: string;
  fontMd?: string;
  fontSm?: string;
  fontXlg?: string;
  fontXsm?: string;
  fontXxlg?: string;
  fontXxxlg?: string;
  light?: string;
  medium?: string;
  primary?: string;
  secondary?: string;
  select?: string;
  success?: string;
  tertiary?: string;
  theme?: string;
  warning?: string;
}
interface IPROJECT {
  HTML: string;
}
interface ILANGUAGES {
  available?: string[];
  default?: string;
}
interface iLocalString {
  en?: string;
  it?: string;
}

interface IAPP {
  appStoreUrl?: string;
  customerName?: string;
  geohubId: number;
  googlePlayUrl?: string;
  id?: string;
  name: string;
}
interface IWEBAPP {
  draw_track_show: boolean;
  editing_inline_show: boolean;
}

type IBOX = {
  box_type: 'title' | 'layer' | 'base' | 'external_url' | 'slug';
  title: iLocalString | string;
};
type ITITLEBOX = IBOX & {
  box_type: 'title';
};
type ILAYERBOX = IBOX & {
  box_type: 'layer';
  layer: number | ILAYER;
};
type IHOMEBASEITEM = {
  title: iLocalString | string;
  image_url: string;
};
type IEXTERNALURLBOX = IHOMEBASEITEM & {
  box_type: 'external_url';
  url: string;
};
type ISLUGBOX = IHOMEBASEITEM & {
  box_type: 'slug';
  slug: string;
};

type IHOMEITEMTRACK = IHOMEBASEITEM & {
  track_id: number;
  taxonomy_activities: string[];
  taaxonomy_where: string[];
  distance: string;
  cai_scale: string;
};
type IHOMEITEMURL = IHOMEBASEITEM & {
  url: string;
};
type IHOMEITEM = IHOMEITEMTRACK | IHOMEITEMURL;
type IBASEBOX = IBOX & {
  box_type: 'base';
  items: IHOMEITEM[];
};
type IHOME = ITITLEBOX | ILAYERBOX | IBASEBOX | IEXTERNALURLBOX | ISLUGBOX;
interface IOPTIONS {
  addArrowsOverTracks: boolean;
  baseUrl: string;
  beBaseUrl?: string;
  caiScaleStyleZoom: number;
  clustering: ICLUSTERING;
  customBackgroundImageUrl?: string;
  detailsMapBehaviour?: IDETAILSMAPBEHAVIOUR;
  downloadFullGemoetryRouteIndex: boolean;
  downloadRoutesInWebapp: boolean;
  download_track_enable: boolean;
  enableTrackAdoption: boolean;
  forceDefaultFeatureColor: boolean;
  forceWelcomePagePopup: boolean;
  galleryAnimationType?: string;
  hideDisclaimer: boolean;
  hideFilters: boolean;
  hideGlobalMap: boolean;
  hideNewsletterInSignup: boolean;
  hideSearch: boolean;
  highlightMapButton: boolean;
  highlightReadMoreButton: boolean;
  mapAttributions?: IMAPATTRIBUTION[];
  maxFitZoom?: number;
  minDynamicOverlayLayersZoom: number;
  passwordRecoveryUrl: string;
  poiIconRadius: number;
  poiIconZoom: number;
  poiLabelMinZoom: number;
  poiMaxRadius: number;
  poiMinRadius: number;
  poiMinZoom: number;
  poiSelectedRadius: number;
  privacyUrl: string;
  resetFiltersAtStartup: boolean;
  showAppDownloadButtons: IAPPDOWNLOADBUTTONS;
  showDifficultyLegend: boolean;
  showEditLink: boolean;
  showHelp: boolean;
  showMapViewfinder: boolean;
  showPoiListOffline: boolean;
  showTrackRefLabel: boolean;
  skipRouteIndexDownload: boolean;
  startFiltersDisabled: boolean;
  startUrl: string;
  termsAndConditionsUrl?: string;
  trackAdoptionUrl?: string;
  trackReconnaissanceUrl?: string;
  trackRefLabelZoom: number;
  useCaiScaleStyle: boolean;
  useFeatureClassicSelectionStyle: boolean;
  voucherUrl?: string;
}
interface IAUTH {
  customCreatePostRoles?: boolean;
  enable?: boolean;
  facebook?: IFACEBOOK;
  force?: boolean;
  google?: IGOOGLE;
  hideCountry?: boolean;
  loginToGeohub?: boolean;
  showAtStartup?: boolean;
  skipToDownloadPublicRoute?: boolean;
}

interface IMAP {
  bbox: [number, number, number, number];
  center?: [number, number];
  defZoom: number;
  flow_line_quote_orange: number;
  flow_line_quote_red: number;
  flow_line_quote_show: boolean;
  layers?: ILAYER[];
  maxZoom: number;
  minZoom: number;
  pois?: any;
  tiles: {[name: string]: string}[];
}
interface ILAYER {
  bbox: [number, number, number, number];
  behaviour: {[name: string]: string};
  data_use_bbox: boolean;
  data_use_only_my_data: boolean;
  description: string;
  icon?: any;
  id: string;
  name: string;
  params?: {[id: string]: string};
  style: {[name: string]: string};
  subtitle: string;
  title: string;
  tracks?: {[name: string]: IHIT[]};
}
interface IOVERLAYERS {
  alert?: boolean;
  color?: string;
  createTaxonomy?: ITAXONOMY;
  description?: string;
  fill_color?: string;
  fill_opacity?: number;
  geojsonUrl?: string;
  icon?: string;
  id: string;
  invertPolygons?: boolean;
  line_dash?: number[];
  maxZoom?: number;
  minZoom?: number;
  name?: string;
  noDetails?: boolean;
  noInteraction?: boolean;
  params?: {[id: string]: string};
  preventFilter?: boolean;
  show_label?: boolean;
  stroke_opacity?: number;
  stroke_width?: number;
  tilesUrl: string;
  type: string;
  zindex?: number;
}

type IDETAILSMAPBEHAVIOUR = 'all' | 'track' | 'poi' | 'route';
type ITAXONOMY = 'activity' | 'theme' | 'when' | 'where' | 'who' | 'webmapp_category';

interface IFACEBOOK {
  id: string;
  name: string;
}
interface IGOOGLE {
  id: string;
  iosId: string;
  name: string;
}
interface ICLUSTERING {
  enable: boolean;
  highZoom?: number;
  highZoomRadius: number;
  radius: number;
}
interface IMAPATTRIBUTION {
  label?: string;
  url?: string;
}
interface IAPPDOWNLOADBUTTONS {
  all: boolean;
  poi: boolean;
  route: boolean;
  track: boolean;
}
interface ICONF {
  APP: IAPP;
  AUTH?: IAUTH;
  HOME?: IHOME[];
  JIDO_UPDATE_TIME?: number;
  LANGUAGES?: ILANGUAGES;
  MAP?: IMAP;
  OPTIONS: IOPTIONS;
  PROJECT?: IPROJECT;
  THEME?: ITHEME;
  WEBAPP?: IWEBAPP;
}
