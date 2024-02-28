import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaUpdateComponent } from './qa-update.component';

describe('QaUpdateComponent', () => {
  let component: QaUpdateComponent;
  let fixture: ComponentFixture<QaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
