import { Pipe, PipeTransform } from '@angular/core';
import { listType } from './movieList';

@Pipe({
  name: 'filterTitle',
  standalone: true
})
export class FilterTitlePipe implements PipeTransform {

  transform(items: listType[], searchTitle: string) {
    if (!items) {
      return [];
    }

    if (!searchTitle) {
      return items;
    }

    searchTitle = searchTitle.toLowerCase();

    return items.filter(item => {
      return item.title.toLowerCase().includes(searchTitle);
    });
  }

}
