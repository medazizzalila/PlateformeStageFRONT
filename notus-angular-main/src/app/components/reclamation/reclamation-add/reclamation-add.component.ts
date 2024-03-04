import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Staterec } from '../staterec'; // Import your Staterec enum
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reclamation-add',
  templateUrl: './reclamation-add.component.html',
  styleUrls: ['./reclamation-add.component.css']
})
export class ReclamationAddComponent {

  reclamationForm: FormGroup;
  staterecValues = Object.values(Staterec); // List of values of the Staterec enum

  constructor(private http: HttpClient, private toastr: ToastrService, private fb: FormBuilder, private datePipe: DatePipe) {
    this.reclamationForm = this.fb.group({
      contenu: ['', [Validators.required]],
      piece: ['', [Validators.required]],
      staterec: ['', [Validators.required]],
      date: [{ value: this.formatDate(new Date()), disabled: true }, [Validators.required]]
    });
  }

  addReclamation() {
    if (this.reclamationForm.invalid) {
      this.toastr.error('Veuillez remplir correctement tous les champs.', 'Erreur');
      return;
    }

    const formData = this.reclamationForm.value;

    // Adjust the form data to match your backend API expectations
    formData.date = this.formatDate(new Date());

    this.http.post(`http://localhost:8083/reclamations/add`, formData)
      .subscribe((response: any) => {
        this.toastr.success('Réclamation ajoutée avec succès', 'Succès');
        this.reclamationForm.reset();
      });
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss')!;
  }
}
