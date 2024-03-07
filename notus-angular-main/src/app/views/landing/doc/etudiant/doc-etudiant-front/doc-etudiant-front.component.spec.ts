import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEtudiantFrontComponent } from './doc-etudiant-front.component';

describe('DocEtudiantFrontComponent', () => {
  let component: DocEtudiantFrontComponent;
  let fixture: ComponentFixture<DocEtudiantFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocEtudiantFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocEtudiantFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
