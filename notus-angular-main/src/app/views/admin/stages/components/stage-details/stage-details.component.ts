import { Component } from '@angular/core';
import { Stage } from '../../models/stage';
import { ActivatedRoute } from '@angular/router';
import { StageService } from '../../services/stage.service';


@Component({
  selector: 'app-stage-details',

  templateUrl: './stage-details.component.html',
 
})
export class StageDetailsComponent {
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
