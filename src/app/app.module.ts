import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthSectionComponent } from './components/strength-section/strength-section.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    StrengthSectionComponent,
    PasswordInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
