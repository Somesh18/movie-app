import { Pipe, PipeTransform } from '@angular/core';
import { listType } from './movieList';

@Pipe({
  name: 'filterYear',
  standalone: true
})
export class FilterYearPipe implements PipeTransform {

  transform(items: listType[], searchYear: string): any {
    if (!items) {
      return [];
    }

    if (!searchYear) {
      return items;
    }


    return items.filter(item => {
      return item.release_date.toLowerCase().includes(searchYear);
    });
  }

}
