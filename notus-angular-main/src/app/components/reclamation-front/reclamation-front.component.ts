import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Staterec } from '../reclamation/staterec';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reclamation-front',
  templateUrl: './reclamation-front.component.html',
  styleUrls: ['./reclamation-front.component.css']
})
export class ReclamationFrontComponent {
  reclamationForm: FormGroup;
  staterecValues = Object.values(Staterec);

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService, private datePipe: DatePipe) {
    this.reclamationForm = this.fb.group({
      contenu: ['', [Validators.required]],
      piece: ['', [Validators.required]],
      staterec: ['ENATTENTE'], // Définir la valeur par défaut à 'ENATTENTE'
      date: [{ value: this.formatDate(new Date()), disabled: true }, [Validators.required]]
    });
  }

  // Dans votre composant TypeScript
fileToUpload: File | null = null;

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}

submit() {
  if (this.reclamationForm.invalid || !this.fileToUpload) {
    this.toastr.error("veuillez remplir correctement les champs");
    return;
  }

  const formData = new FormData();
  formData.append('piece', this.fileToUpload, this.fileToUpload.name);
  formData.append('contenu', this.reclamationForm.get('contenu')!.value);
  formData.append('date', this.formatDate(new Date())); // Include formatted date directly
  formData.append('staterec', this.reclamationForm.get('staterec')!.value);
  ;

  this.http.post('http://localhost:8083/reclamations/add', formData)
    .subscribe(
      response => this.toastr.success('Réclamation ajoutée avec succès'),
      error => this.toastr.error('Une erreur est survenue lors de l\'ajout de la réclamation')
    );
}



  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss')!;
  }
}
