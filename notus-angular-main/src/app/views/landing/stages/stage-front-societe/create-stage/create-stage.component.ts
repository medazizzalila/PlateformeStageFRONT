import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Stage } from 'src/app/views/admin/stages/models/stage';
import { StageService } from 'src/app/views/admin/stages/services/stage.service';

@Component({
  selector: 'app-create-stage-front-societe',
  
  templateUrl: './create-stage.component.html'
})
export class CreateStageSocieteComponent {
  stage: Stage = new Stage();
  idsociete: number = 1;
  constructor(private stageService: StageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStage(){
    this.stage.idsociete = this.idsociete;
     this.stageService.createStage(this.stage).subscribe( data =>{
      console.log(data);
      this.goToStageList();
     
    },
    error => console.log(error));
    
  }

  goToStageList(){
    this.router.navigate(['stagesoc']);
  }
  
  onSubmit(){
    console.log(this.stage);
    this.saveStage();
  }

  validateForm(event: Event): void {
    // Prevent default form submission behavior
    event.preventDefault();

    // Perform validation checks
    let isValid = true;

    // Check if title is empty
    if (!this.stage.title || !this.stage.title.trim()) {
      alert('Please enter a title.');
      isValid = false;
    } 

    // Check if start date is empty
    if (!this.stage.datedebut) {
      alert('Please select a start date.');
      isValid = false;
    }

    // Check if end date is empty
    if (!this.stage.datefin) {
      alert('Please select an end date.');
      isValid = false;
    }

    // Check if email is empty or invalid format
    if (!this.stage.email || !this.validateEmail(this.stage.email)) {
      alert('Please enter a valid email address.');
      isValid = false;
    }

    // Check if num is empty or not a number
    if (!this.stage.num || isNaN(this.stage.num)) {
      alert('Please enter a valid number.');
      isValid = false;
    }

    // Check if subject is empty
    if (!this.stage.sujet ||!this.stage.sujet.trim()) {
      alert('Please enter a subject.');
      isValid = false;
    }

    // If form is valid, submit the form
    if (isValid) {
      this.onSubmit(); // Call your submit function here
    }
  }
  // Function to validate email format
  validateEmail(email: string): boolean {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


}