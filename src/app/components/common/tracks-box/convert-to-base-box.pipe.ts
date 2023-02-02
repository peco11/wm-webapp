import {Pipe, PipeTransform} from '@angular/core';
import {IHOMEITEM, IHOMEITEMTRACK} from 'src/app/types/config';

@Pipe({
  name: 'convertToItemTracks',
})
export class ConvertToItemTracksPipe implements PipeTransform {
  transform(value: IHOMEITEM[]): IHOMEITEMTRACK[] {
    return value as IHOMEITEMTRACK[];
  }
}
