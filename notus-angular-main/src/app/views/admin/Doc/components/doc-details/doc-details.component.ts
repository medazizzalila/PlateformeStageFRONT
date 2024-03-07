import { Component } from '@angular/core';
import { Doc } from '../../models/doc';
import { ActivatedRoute } from '@angular/router';
import { StageService } from '../../../stages/services/stage.service';
import { DocService } from '../../services/doc.service';

@Component({
  selector: 'app-doc-details',
  
  templateUrl: './doc-details.component.html'
})
export class DocDetailsComponent {

  id: number
  doc: Doc
  constructor(private route: ActivatedRoute, private docService: DocService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.doc = new Doc();
    this.docService.getDocById(this.id).subscribe( data => {
      this.doc = data;
    });
  }
}
