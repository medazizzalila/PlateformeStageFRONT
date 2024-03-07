import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageFrontSocieteComponent } from './stage-front-societe.component';

describe('StageFrontSocieteComponent', () => {
  let component: StageFrontSocieteComponent;
  let fixture: ComponentFixture<StageFrontSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageFrontSocieteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageFrontSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
