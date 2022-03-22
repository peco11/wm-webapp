import {createReducer, on} from '@ngrx/store';
import {loadConfSuccess} from './elastic.actions';

export const confFeatureKey = 'conf';
export interface IConfRootState {
  [confFeatureKey]: ICONF;
}
const initialConfState: ICONF = {
  APP: {
    name: 'Webmapp',
    geohubId: 3,
  },
  OPTIONS: {
    baseUrl: '-',
    startUrl: '/main/map',
    privacyUrl: 'webmapp.it/privacy',
    passwordRecoveryUrl: '/wp-login.php?action=lostpassword',
    hideGlobalMap: false,
    addArrowsOverTracks: false,
    showTrackRefLabel: false,
    useCaiScaleStyle: false,
    forceDefaultFeatureColor: false,
    useFeatureClassicSelectionStyle: false,
    downloadRoutesInWebapp: false,
    showPoiListOffline: false,
    showHelp: false,
    hideDisclaimer: false,
    showDifficultyLegend: false,
    showEditLink: false,
    hideSearch: false,
    hideFilters: false,
    resetFiltersAtStartup: false,
    startFiltersDisabled: false,
    showMapViewfinder: false,
    highlightMapButton: false,
    hideNewsletterInSignup: false,
    forceWelcomePagePopup: false,
    skipRouteIndexDownload: false,
    downloadFullGemoetryRouteIndex: false,
    enableTrackAdoption: false,
    highlightReadMoreButton: false,
    trackRefLabelZoom: 12,
    caiScaleStyleZoom: 12,
    poiSelectedRadius: 2.5,
    poiIconZoom: 15,
    poiIconRadius: 1.7,
    poiMaxRadius: 1.7,
    poiMinRadius: 0.2,
    poiMinZoom: 1,
    poiLabelMinZoom: 10,
    minDynamicOverlayLayersZoom: 12,
    clustering: {
      enable: false,
      radius: 70,
      highZoomRadius: 70,
    },
    showAppDownloadButtons: {
      track: false,
      poi: false,
      route: false,
      all: false,
    },
  },
  THEME: {
    primary: '#3880ff',
    secondary: '#0cd1e8',
    tertiary: '#ff0000',
    select: 'rgba(226, 249, 0, 0.6)',
    success: '#10dc60',
    warning: '#ffce00	',
    danger: '#f04141',
    dark: '#000000',
    medium: '#989aa2',
    light: '#ffffff',
    fontXxxlg: '28px',
    fontXxlg: '25px',
    fontXlg: '22px',
    fontLg: '20px',
    fontMd: '17px',
    fontSm: '14px',
    fontXsm: '12px',
    fontFamilyHeader: 'Roboto Slab',
    fontFamilyContent: 'Roboto',
    defaultFeatureColor: '#000000',
    theme: 'webmapp',
  },
};
export const confReducer = createReducer(
  initialConfState,
  on(loadConfSuccess, (state, {conf}) => {
    localStorage.setItem('appname', state.APP.name);
    return {
      ...conf,
      ...{
        APP: {...state.APP, ...conf.APP},
        THEME: {...state.THEME, ...conf.THEME},
        OPTIONS: {...state.OPTIONS, ...conf.OPTIONS},
      },
    };
  }),
);
