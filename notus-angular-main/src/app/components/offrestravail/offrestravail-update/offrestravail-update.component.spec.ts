import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrestravailUpdateComponent } from './offrestravail-update.component';

describe('OffrestravailUpdateComponent', () => {
  let component: OffrestravailUpdateComponent;
  let fixture: ComponentFixture<OffrestravailUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffrestravailUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffrestravailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
