import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-section',
  templateUrl: './strength-section.component.html',
  styleUrl: './strength-section.component.scss'
})
export class StrengthSectionComponent {
  @Input() strength: string[] = [];
}
