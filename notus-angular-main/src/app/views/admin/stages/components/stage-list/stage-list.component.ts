import { Component ,OnInit} from '@angular/core';
import { Stage } from '../../models/stage';
import { StageService } from '../../services/stage.service';
import { Router } from '@angular/router';
import { FilterPipe } from './filter.pipe'; // Import your custom pipe here



@Component({
  selector: 'app-stage-list',
 
  templateUrl: './stage-list.component.html',
  
})
export class StageListComponent  {

  searchTerm: string = ''; // Define the searchTerm property here
  ascendingSort: boolean = true;

  
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
  stageDetails(id: number){
    this.router.navigate(['admin/stage-details', id]);
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
  sortStagesByStartDay(): void {
    this.ascendingSort = !this.ascendingSort;
    if (this.ascendingSort) {
      this.stages.sort((a, b) => new Date(a.datedebut).getTime() - new Date(b.datedebut).getTime());
    } else {
      this.stages.sort((a, b) => new Date(b.datedebut).getTime() - new Date(a.datedebut).getTime());
    }
  }

  

}
