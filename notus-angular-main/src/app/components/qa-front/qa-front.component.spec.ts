import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaFrontComponent } from './qa-front.component';

describe('QaFrontComponent', () => {
  let component: QaFrontComponent;
  let fixture: ComponentFixture<QaFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QaFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
