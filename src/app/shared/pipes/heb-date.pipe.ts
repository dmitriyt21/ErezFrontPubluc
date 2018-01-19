import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hebDate'
})
export class HebDatePipe implements PipeTransform {

  transform(month : string , date : Date = new Date() , addYear : boolean = false): string {
    let strMonth = this.getMonth(Number(month));
    return addYear ? strMonth + ' ' + date.getFullYear() : strMonth;
  }

  private getMonth(month : number) : string{
      switch(month){
          case 1: return 'ינואר';
          case 2: return 'פברואר';
          case 3: return 'מרץ';
          case 4: return 'אפריל';
          case 5: return 'מאי';
          case 6: return 'יוני';
          case 7: return 'יולי';
          case 8: return 'אוגוסט';
          case 9: return 'ספטמבר';
          case 10: return 'אוקטובר';
          case 11: return 'נובמבר';
          case 12: return 'דצמבר';
      }
  }

}
