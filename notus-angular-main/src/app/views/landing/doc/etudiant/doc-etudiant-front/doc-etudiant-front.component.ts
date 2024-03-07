import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from 'src/app/views/admin/Doc/models/doc';
import { DocService } from 'src/app/views/admin/Doc/services/doc.service';

@Component({
  selector: 'app-doc-etudiant-front',
  
  templateUrl: './doc-etudiant-front.component.html',

})
export class DocEtudiantFrontComponent {
  id: number
  doc: Doc
  constructor(private route: ActivatedRoute, private docService: DocService) { }

  ngOnInit(): void {
    this.id = 44;

    this.doc = new Doc();
    this.docService.getDocByIdetud(this.id).subscribe( data => {
      this.doc = data;
    });
  }

}
