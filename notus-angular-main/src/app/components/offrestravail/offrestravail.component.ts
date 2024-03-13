import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-offrestravail",
  templateUrl: "./offrestravail.component.html",
})

export class OffrestravailComponent implements OnInit {
  offretravaux: any;
  originalOffretravaux: any;
  termeDeRecherche = '';
  totalLength:any;
  page:number=1;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOffretravaux();
  }

  fetchOffretravaux() {
    this.http.get("http://localhost:8083/offretravail/")
      .subscribe((data) => {
        this.offretravaux = data;
        this.originalOffretravaux = data;
      });
  }

  deleteOffretravail(id: number) {
    this.http.delete(`http://localhost:8083/offretravail/delete/${id}`)
      .subscribe((response: any) => {
        console.log("Offre de travail supprimée avec succès");
        this.fetchOffretravaux(); 
      });
  }

  recherche() {
    if (this.termeDeRecherche.trim() === '') {
      this.offretravaux = this.originalOffretravaux; 
    } else {
      this.offretravaux = this.originalOffretravaux.filter((offretravail: any) =>
        offretravail.descrip.includes(this.termeDeRecherche)
      );
    }
  }


}
