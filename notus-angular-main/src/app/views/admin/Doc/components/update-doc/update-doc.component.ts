import { Component } from '@angular/core';
import { Doc } from '../../models/doc';
import { ActivatedRoute, Router } from '@angular/router';
import { DocService } from '../../services/doc.service';

@Component({
  selector: 'app-update-doc',
  
  templateUrl: './update-doc.component.html'
})
export class UpdateDocComponent {
  id: number;
  doc: Doc = new Doc();
  constructor(private docService: DocService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.docService.getDocById(this.id).subscribe(data => {
      this.doc = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.docService.updateDoc(this.id, this.doc).subscribe( data =>{
      this.goTodocList();
    }
    , error => console.log(error));
  }

  goTodocList(){
    this.router.navigate(['admin/doc']);
  }
  validateForm(event: Event): void {
    // Prevent default form submission behavior
    event.preventDefault();

    // Perform validation checks
    let isValid = true;

    
    // Check if num is empty or not a number
    if (!this.doc.id_etud || isNaN(this.doc.id_etud)) {
      alert('Please enter a valid number.');
      isValid = false;
    }
    if (!this.doc.id_societ || isNaN(this.doc.id_societ)) {
      alert('Please enter a valid number.');
      isValid = false;
    }

   
    // If form is valid, submit the form
    if (isValid) {
      this.onSubmit(); // Call your submit function here
    }
  }

  

}
