import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {
  hour: number = 0;
  min: number = 0;
  transform(value: number): string {
    if(value > 0) {
      this.hour = value / 60 | 0;
      this.min = value % 60;
    }
    return this.hour+"h "+this.min+"min";
  }
}
