import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stage } from 'src/app/views/admin/stages/models/stage';
import { StageService } from 'src/app/views/admin/stages/services/stage.service';

@Component({
  selector: 'app-stage-datail-front',
 
  templateUrl: './stage-datail-front.component.html'
})
export class StageDatailFrontComponent {
  id: number
  stage: Stage
  constructor(private route: ActivatedRoute, private stageService: StageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.stage = new Stage();
    this.stageService.getStageById(this.id).subscribe( data => {
      this.stage = data;
    });
  }

}
