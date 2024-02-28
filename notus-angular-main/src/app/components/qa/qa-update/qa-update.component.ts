import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qa-update',
  templateUrl: './qa-update.component.html',
  styleUrls: ['./qa-update.component.css']
})
export class QaUpdateComponent implements OnInit {
  
  id: number;
  question: string;
  reponse: string;
  qaForm: FormGroup;

  constructor(private http: HttpClient, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8083/qa/${this.id}`)
      .subscribe((qa: any) => {
        this.question = qa.question;
        this.reponse = qa.reponse;
        // Update form values after fetching data
        this.qaForm.patchValue({
          question: this.question,
          reponse: this.reponse
        });
      });
      
      // Initialize the form with validators
      this.qaForm = this.fb.group({
        question: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z]).+$')]],
        reponse: ['', [Validators.required, Validators.pattern('^.*[a-zA-Z0-9].*$')]]
      });
  }

  updateQA() {
    // Check if form is valid
    if (this.qaForm.invalid) {
      this.toastr.error('Veuillez remplir correctement tous les champs.', 'Erreur');
      return;
    }

    // If form is valid, proceed with updating
    const formData = this.qaForm.value;

    this.http.put(`http://localhost:8083/qa/update/${this.id}`, formData)
      .subscribe((response: any) => {
        console.log("QA mis à jour avec succès");
        this.toastr.success('Q&A mis à jour avec succès', 'Succès');
        this.router.navigate(["/admin/qa"]);
      });
  } 
}
