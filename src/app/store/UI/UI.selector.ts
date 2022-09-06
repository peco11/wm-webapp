import {createFeatureSelector, createSelector} from '@ngrx/store';

import {featureKey} from './UI.reducer';

const feature = createFeatureSelector<{
  currentLayer?: ILAYER;
  currentPoiId?: number;
  currentFilters?: string[];
  drawTrack: boolean;
} | null>(featureKey);

export const UICurrentLAyer = createSelector(feature, state =>
  state && state.currentLayer ? state.currentLayer : null,
);
export const UICurrentPoiId = createSelector(feature, state =>
  state && state.currentPoiId ? state.currentPoiId : null,
);
export const UICurrentFilters = createSelector(feature, state =>
  state && state.currentFilters ? state.currentFilters : [],
);
export const enabledDrawTrack = createSelector(feature, state =>
  state && state.drawTrack ? state.drawTrack : false,
);
