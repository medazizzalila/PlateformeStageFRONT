import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Staterec } from '../staterec'; // Assurez-vous d'importer correctement votre enum Staterec

@Component({
  selector: 'app-reclamation-update',
  templateUrl: './reclamation-update.component.html',
  styleUrls: ['./reclamation-update.component.css']
})
export class ReclamationUpdateComponent implements OnInit {

  reclamationForm: FormGroup;
  staterecValues = Object.values(Staterec); // Tableau des valeurs de l'enum Staterec

  constructor(private http: HttpClient, private toastr: ToastrService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    const reclamationId = +this.route.snapshot.paramMap.get('id');
    this.fetchReclamation(reclamationId);
  }

  initForm() {
    this.reclamationForm = this.fb.group({
      contenu: ['', [Validators.required]],
      piece: ['', [Validators.required]],
      staterec: [null, [Validators.required]], // Initialiser à null pour que le champ soit vide au début
      date: [new Date(), [Validators.required]]
    });
  }
  

  fetchReclamation(id: number) {
    this.http.get(`http://localhost:8083/reclamations/${id}`)
      .subscribe((reclamation: any) => {
        this.reclamationForm.patchValue({
          contenu: reclamation.contenu,
          piece: reclamation.piece,
          staterec: reclamation.staterec, // Assurez-vous que reclamation.staterec est une valeur valide de l'énumération Staterec
          date: reclamation.date
        });
      });
  }

  updateReclamation() {
    if (this.reclamationForm.invalid) {
      this.toastr.error('Veuillez remplir correctement tous les champs.', 'Erreur');
      return;
    }

    const reclamationId = +this.route.snapshot.paramMap.get('id');
    const formData = this.reclamationForm.value;

    this.http.put(`http://localhost:8083/reclamations/update/${reclamationId}`, formData)
      .subscribe((response: any) => {
        console.log("Réclamation mise à jour avec succès");
        this.toastr.success('Réclamation mise à jour avec succès', 'Succès');
        this.router.navigate(['/admin/reclamation']);
      }, (error) => {
        console.error('Erreur lors de la mise à jour de la réclamation : ', error);
        this.toastr.error('Erreur lors de la mise à jour de la réclamation', 'Erreur');
      });
  }
}
