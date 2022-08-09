import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getFilterIcn',
})
export class WmGetFilterIcnPipe implements PipeTransform {
  transform(identifier: string, filters: string[]): string {
    const outline = 'icn-outline-';
    let selected = '';
    if (filters.indexOf(identifier) >= 0) {
      selected = '_selected';
    }
    if (identifier.indexOf('where_') >= 0) {
      identifier = 'poi_type_neighborhood-and-square';
    }

    return `assets/icons/pois/${identifier}${selected}.png`;
  }
}
