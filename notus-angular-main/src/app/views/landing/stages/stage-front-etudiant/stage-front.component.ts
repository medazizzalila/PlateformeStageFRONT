import { Component } from '@angular/core';
import { Stage } from '../../../admin/stages/models/stage';
import { StageService } from '../../../admin/stages/services/stage.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-stage-front',
  
  templateUrl: './stage-front.component.html'
})
export class StageFrontComponent {
  stage: Stage = new Stage();
  idEtudiant : number = 2;
  searchTerm: string = ''; // Define the searchTerm property here
  ascendingSort: boolean = true;
  datedebut: Date;


  
  constructor(private stageService: StageService ,
    private router: Router ) {}
  stages: any=[];
  
  
 

  ngOnInit() {
    this.getAllStages();
    
  }

  getAllStages(){
    this.stageService.getAllStages().subscribe((res) =>{
      console.log(res);
      this.stages = res;
    })
  }

  postulerAuStage( idSociete: number) {
    this.stageService.postulerAuStage(this.idEtudiant, idSociete)
      .subscribe(
        message => {
          this.getAllStages();
          console.log(message); // Afficher le message de succès
          // Traiter le message si nécessaire
          alert('Postulation réussie');
        },
        error => {
          console.error('Erreur lors de la postulation', error); // Gérer l'erreur
          alert('Postulation réussie');
          this.getAllStages();
        }
      );
      this.getAllStages();
  }
  stageDetails(id: number){
    this.router.navigate(['details-stagefront', id]);
  }

  updateStage(id: number){
    this.router.navigate(['admin/update-stage', id]);
  }

  addStage(){
    this.router.navigate(['admin/create-stage']);
  }

  deleteStage(id: number){
    this.stageService.deleteStage(id).subscribe( (data) => {
      console.log(data);
      this.getAllStages();
    })
  }

  
  // Method to search for stages by title
  searchStages(): void {
    if (this.searchTerm.trim()||this.searchTerm) {
      this.stageService.searchStagesByTitle(this.searchTerm)
        .subscribe(stages => this.stages = stages);
    } else {
      this.getAllStages();   }
  }
  search() {
    this.stageService.searchByDatedebut(this.datedebut).subscribe(data => {
      this.stages = data;
    });
  }

}
