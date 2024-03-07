import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageFrontComponent } from './stage-front.component';

describe('StageFrontComponent', () => {
  let component: StageFrontComponent;
  let fixture: ComponentFixture<StageFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
