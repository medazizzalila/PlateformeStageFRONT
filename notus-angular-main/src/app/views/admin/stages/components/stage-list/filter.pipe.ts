// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Stage } from '../../models/stage';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(stages: Stage[], searchTerm: string): Stage[] {
    if (!stages || !searchTerm) {
      return stages;
    }

    return stages.filter(stage =>
      stage.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}