import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offrestravail-add',
  templateUrl: './offrestravail-add.component.html',
  styleUrls: ['./offrestravail-add.component.css']
})
export class OffrestravailAddComponent {

  datedebut: Date;
  datefin: Date;
  descrip: string;
  email: string;
  num: number;
  societe: string;
  titre: string;
  localisation: string;
  offretravailForm: FormGroup;

  constructor(private http: HttpClient, private toastr: ToastrService, private fb: FormBuilder) {
   this.offretravailForm = this.fb.group({
        datedebut: [new Date(), [Validators.required]],
        datefin: [new Date(), [Validators.required]],
        descrip: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        num: ['', [Validators.required]],
        societe: ['', [Validators.required]],
        titre: ['', [Validators.required]],
        localisation: ['', [Validators.required]]
      });
  }

  addOffretravail() {
    if (this.offretravailForm.invalid) {
      this.toastr.error('Veuillez remplir correctement tous les champs.', 'Erreur');
      return;
    }

    const formData = this.offretravailForm.value;

    this.http.post(`http://localhost:8083/offretravail/add`, formData)
      .subscribe((response: any) => {
        this.toastr.success('Offre de travail ajoutée avec succès', 'Succès');
        this.resetForm();
      });
  }

  resetForm() {
    this.offretravailForm.reset({
      datedebut: new Date(),
      datefin: new Date(),
      descrip: '',
      email: '',
      num: '',
      societe: '',
      titre: '',
      localisation:''

    });
  }
}
