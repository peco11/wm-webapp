import {createAction, props} from '@ngrx/store';

export const setCurrentLayer = createAction(
  '[UI] Set current layer',
  props<{currentLayer: ILAYER}>(),
);
export const setCurrentPoiId = createAction(
  '[UI] Set current poi id',
  props<{currentPoiId: number}>(),
);
export const setCurrentFilters = createAction(
  '[UI] Set current Filters',
  props<{currentFilters: any[]}>(),
);
export const loadConfFail = createAction('[UI] Set current layer Success Fail');
