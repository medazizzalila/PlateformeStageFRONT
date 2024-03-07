import { Component } from '@angular/core';
import { Stage } from '../../models/stage';
import { StageService } from '../../services/stage.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-stage',
  
  templateUrl: './update-stage.component.html',
})
export class UpdateStageComponent {
  id: number;
  stage: Stage = new Stage();
  constructor(private stageService: StageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.stageService.getStageById(this.id).subscribe(data => {
      this.stage = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.stageService.updateStage(this.id, this.stage).subscribe( data =>{
      this.goTostageList();
    }
    , error => console.log(error));
  }

  goTostageList(){
    this.router.navigate(['admin/stage']);
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
