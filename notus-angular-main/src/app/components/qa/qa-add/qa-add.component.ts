import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qa-add',
  templateUrl: './qa-add.component.html',
  styleUrls: ['./qa-add.component.css']
})
export class QaAddComponent {

  question: string;
  reponse: string;
  qaForm: FormGroup;

  constructor(private http: HttpClient, private toastr: ToastrService, private fb: FormBuilder) {
   this.qaForm = this.fb.group({
        question: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z]).+$')]],
        reponse: ['', [Validators.required, Validators.pattern('^.*[a-zA-Z0-9].*$')]]
      });
  }

  addQA() {
    // Check if form is valid
    if (this.qaForm.invalid) {
      this.toastr.error('Veuillez remplir correctement tous les champs.', 'Erreur');
      return;
    }

    const formData = this.qaForm.value;

    this.http.post(`http://localhost:8083/qa/add`, formData)
      .subscribe((response: any) => {
        this.toastr.success('Q&A ajoutée avec succès', 'Succès');
        this.question = '';
        this.reponse = '';
        this.qaForm.reset();
      });
  }
}
