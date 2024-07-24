import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public passwordForm: FormGroup;
  public strength: string[] = ['gray', 'gray', 'gray'];

  constructor() {
    this.passwordForm = new FormGroup({
      password: new FormControl(""),
    });
  }

  ngOnInit() {
    this.passwordForm.get('password')?.valueChanges.subscribe(value => {
      this.checkStrength(value);
    });
  }

  private checkStrength(password: string) {
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
