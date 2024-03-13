import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reclamation",
  templateUrl: "./reclamation.component.html",
})
export class ReclamationComponent implements OnInit {
  reclamations: any;
  originalReclamations: any;
  termeDeRecherche = '';
  totalLength:any;
  page:number=1;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchReclamations();
  }

  fetchReclamations() {
    this.http.get("http://localhost:8083/reclamations/")
      .subscribe((data) => {
        this.reclamations = data;
        this.originalReclamations = data;
      });
  }

  deleteReclamation(id: number) {
    this.http.delete(`http://localhost:8083/reclamations/delete/${id}`)
      .subscribe(() => {
        console.log("Reclamation deleted successfully");
        this.fetchReclamations();
      });
  }

  recherche() {
    if (this.termeDeRecherche.trim() === '') {
      this.reclamations = this.originalReclamations;
    } else {
      this.reclamations = this.originalReclamations.filter((reclamation: any) =>
        reclamation.contenu.includes(this.termeDeRecherche) 
      );
    }
  }
}
