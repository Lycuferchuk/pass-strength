import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthSectionComponent } from './strength-section.component';

describe('StrengthSectionComponent', () => {
  let component: StrengthSectionComponent;
  let fixture: ComponentFixture<StrengthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrengthSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
