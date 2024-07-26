import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthCheckService {
  public strength: string[] = ['', '', ''];

  constructor() {}

  public checkStrength(password: string): string[] {
    if (!password) {
      this.strength = ['gray', 'gray', 'gray'];
    } else if (password.length < 8) {
      this.strength = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /[0-9]/.test(password);
      const hasSymbols = /[^a-zA-Z0-9]/.test(password);

      this.changeColors(hasDigits, hasLetters, hasSymbols);
    }

    return this.strength;
  }

  private changeColors(digits: boolean, letters: boolean, symbols: boolean) {
    if (letters && digits && symbols) {
      this.strength = ['green', 'green', 'green'];
    } else if ((letters && digits) || (letters && symbols) || (digits && symbols)) {
      this.strength = ['yellow', 'yellow', 'gray'];
    } else {
      this.strength = ['red', 'gray', 'gray'];
    }
  }
}
