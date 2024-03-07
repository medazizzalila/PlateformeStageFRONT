import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StageService } from 'src/app/views/admin/stages/services/stage.service';

@Component({
  selector: 'app-stage-front-societe',
  
  templateUrl: './stage-front-societe.component.html'
})
export class StageFrontSocieteComponent {
  searchTerm: string = ''; // Define the searchTerm property here
  ascendingSort: boolean = true;
   idsociete: number = 1;

  
  constructor(private stageService: StageService ,
    private router: Router ) {}
  stages: any=[];

  
  
 

  ngOnInit() {
    
    this.getStageSociete( this.idsociete);
    
  }



  getStageSociete(id: number){
    this.stageService.getStageByIdsociete(id).subscribe((res) =>{
      console.log(res);
      this.stages = res;
    })
  }
  stageDetails(id: number){
    this.router.navigate(['details-stagefront', id]);
  }

  updateStage(id: number){
    this.router.navigate(['update-stagesoc', id]);
  }

  addStage(){
    this.router.navigate(['create-stagesoc']);
  }

  deleteStage(id: number){
    this.stageService.deleteStage(id).subscribe( (data) => {
      console.log(data);
      this.getStageSociete(this.idsociete);
    })
  }

  // Method to search for stages by title
  searchStages(): void {
    if (this.searchTerm.trim()||this.searchTerm) {
      this.stageService.searchStagesByTitle(this.searchTerm)
        .subscribe(stages => this.stages = stages);
    } else {
      this.getStageSociete(this.idsociete);   }
  }
  sortStagesByStartDay(): void {
    this.ascendingSort = !this.ascendingSort;
    if (this.ascendingSort) {
      this.stages.sort((a, b) => new Date(a.datedebut).getTime() - new Date(b.datedebut).getTime());
    } else {
      this.stages.sort((a, b) => new Date(b.datedebut).getTime() - new Date(a.datedebut).getTime());
    }
  }

}
