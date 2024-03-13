import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationFrontComponent } from './reclamation-front.component';

describe('ReclamationFrontComponent', () => {
  let component: ReclamationFrontComponent;
  let fixture: ComponentFixture<ReclamationFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamationFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamationFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
