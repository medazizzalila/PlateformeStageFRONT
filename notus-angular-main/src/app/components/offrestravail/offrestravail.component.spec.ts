import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrestravailComponent } from './offrestravail.component';

describe('OffrestravailComponent', () => {
  let component: OffrestravailComponent;
  let fixture: ComponentFixture<OffrestravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffrestravailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffrestravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
