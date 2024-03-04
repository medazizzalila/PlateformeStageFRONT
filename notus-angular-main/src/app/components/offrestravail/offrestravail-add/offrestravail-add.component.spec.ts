import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrestravailAddComponent } from './offrestravail-add.component';

describe('OffrestravailAddComponent', () => {
  let component: OffrestravailAddComponent;
  let fixture: ComponentFixture<OffrestravailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffrestravailAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffrestravailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
