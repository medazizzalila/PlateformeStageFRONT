import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageDatailFrontComponent } from './stage-datail-front.component';

describe('StageDatailFrontComponent', () => {
  let component: StageDatailFrontComponent;
  let fixture: ComponentFixture<StageDatailFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageDatailFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageDatailFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
