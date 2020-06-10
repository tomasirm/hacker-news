import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class DatePipe implements PipeTransform{
  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    const sortedValues = value.sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
    return sortedValues;
  }
}
