import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageListComponent } from './stage-list.component';

describe('TutorialsListComponent', () => {
  let component: StageListComponent;
  let fixture: ComponentFixture<StageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});