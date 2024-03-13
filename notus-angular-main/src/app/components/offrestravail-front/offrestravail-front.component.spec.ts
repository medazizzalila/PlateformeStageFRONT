import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrestravailFrontComponent } from './offrestravail-front.component';

describe('OffrestravailFrontComponent', () => {
  let component: OffrestravailFrontComponent;
  let fixture: ComponentFixture<OffrestravailFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffrestravailFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffrestravailFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
