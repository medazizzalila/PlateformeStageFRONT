import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSocieteListComponent } from './doc-societe-list.component';

describe('DocSocieteListComponent', () => {
  let component: DocSocieteListComponent;
  let fixture: ComponentFixture<DocSocieteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSocieteListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocSocieteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
