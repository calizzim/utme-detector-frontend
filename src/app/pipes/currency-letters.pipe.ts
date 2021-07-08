import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyLetters'
})
export class CurrencyLettersPipe implements PipeTransform {
  fix(value) {
    value = value.toFixed(2)
    let [before,after] = value.split('.')
    if(before.length == 1) return value
    if(before.length == 2) return before + '.' + after.substr(0,1)
    return before
  }
  transform(value, ...args: unknown[]): unknown {
    value = Number(value)
    let len = Math.floor(Math.log10(value))
    if(len<3) return '$' + value.toPrecision(2)
    if(len<6) return '$' + this.fix(value / 1000) + 'K'
    if(len<9) return '$' + this.fix(value / 1000000) + 'M'
    return '$' + this.fix(value / 1000000000) + 'B'
  }

}
