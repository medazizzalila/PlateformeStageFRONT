  import { Component } from '@angular/core';
  import { HttpClient } from "@angular/common/http";
  import { ToastrService } from 'ngx-toastr';
  import { ActivatedRoute, Router } from '@angular/router';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  @Component({
    selector: 'app-offrestravail-update',
    templateUrl: './offrestravail-update.component.html',
    styleUrl: './offrestravail-update.component.css'
  })
  export class OffrestravailUpdateComponent {

    id: number;
    datedebut: Date;
    datefin: Date;
    descrip: string;
    email: string;
    num: number;
    societe: string;
    offretravailForm: FormGroup;

    constructor (private http: HttpClient, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private fb: FormBuilder) {}
      ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.http.get(`http://localhost:8083/offretravail/${this.id}`)
          .subscribe((ot: any) => {
            this.datedebut = ot.datedebut;
            this.datefin = ot.datefin;
            this.descrip = ot.descrip;
            this.email = ot.email;
            this.num = ot.num;
            this.societe = ot.societe;
            // Update form values after fetching data
            this.offretravailForm.patchValue({
              datedebut: this.datedebut,
              datefin: this.datefin,
              descrip: this.descrip,
              email:  this.email,
              num : this.num,
              societe:  this.societe
            }); 
          });

          this.offretravailForm = this.fb.group({
            datedebut: [new Date(), [Validators.required]],
          datefin: [new Date(), [Validators.required]],
          descrip: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          num: ['', [Validators.required]],
          societe: ['', [Validators.required]]
          });
        }
        updateOT() {
          // Check if form is valid
          if (this.offretravailForm.invalid) {
            this.toastr.error('Veuillez remplir correctement tous les champs.', 'Erreur');
            return;
          }

          const formData = this.offretravailForm.value;

      this.http.put(`http://localhost:8083/offretravail/update/${this.id}`, formData)
        .subscribe((response: any) => {
          console.log("offre de travail mis à jour avec succès");
          this.toastr.success('offre de travail mis à jour avec succès', 'Succès');
          this.router.navigate(["/admin/offres"]);
        });
        }
  }

