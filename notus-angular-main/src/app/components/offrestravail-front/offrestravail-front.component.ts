import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-offrestravail-front',
  templateUrl: './offrestravail-front.component.html',
  styleUrls: ['./offrestravail-front.component.css'] 
})
export class OffrestravailFrontComponent {
  offretravaux: any;
  originalOffretravaux: any;
  totalLength:any;
  page:number=1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOffretravaux();
  }
  
  fetchOffretravaux() {
    this.http.get("http://localhost:8083/offretravail/")
      .subscribe((data: any) => {
        // Ajoutez le lien à chaque offre d'emploi
        this.offretravaux = data.map((offre: any) => {
          return {
            titre: offre.titre,
            societe: offre.societe,
            descrip: offre.descrip,
            localisation: offre.localisation,
            lien: offre.lien // Assurez-vous que votre API renvoie le lien pour chaque offre d'emploi
          };
        });
        this.originalOffretravaux = this.offretravaux;
      });
  }

  
  filterByCompany(company: string) {
    if (company === 'Toutes') {
      this.offretravaux = this.originalOffretravaux; 
    } else {
      this.offretravaux = this.originalOffretravaux.filter((offre: any) => offre.societe === company);
    }
  }

  getUniqueCompanies() {
   
    const uniqueCompanies = [];
    this.originalOffretravaux.forEach((offre: any) => {
      if (!uniqueCompanies.includes(offre.societe)) {
        uniqueCompanies.push(offre.societe);
      }
    });
    return uniqueCompanies;
  }
}
