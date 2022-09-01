import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  public transform(cardNumber: string): string {
    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Length';
    }
  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLength = 15;

    if (cardNumberLength === isAmericanExpressCardLength || cardNumberLength === isMasterDiscoverVisaCardLength) {
      return true;
    }
    return false;
  }
}
