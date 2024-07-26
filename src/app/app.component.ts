import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PasswordStrengthCheckService } from "./services/password-strength-check.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [PasswordStrengthCheckService]
})
export class AppComponent {
  public passwordForm!: FormGroup;
  public passStrength: string[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(private httpService: PasswordStrengthCheckService) {
    this.setData();
  }

  private setData() {
    this.passwordForm = new FormGroup({
      password: new FormControl(""),
    });
  }

  ngOnInit() {
    const passChangeSub = this.passwordForm.get('password')?.valueChanges.subscribe(password => {
      this.passStrength = this.httpService.checkStrength(password);
    });

    this.subscriptions.add(passChangeSub)
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
