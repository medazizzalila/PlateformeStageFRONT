import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-qa",
  templateUrl: "./qa.component.html",
})

export class QaComponent implements OnInit {
  qas: any;
  originalQas: any; // Store the original qas array
  termeDeRecherche = '';

  constructor(private http: HttpClient) {}

@ViewChild (MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.fetchQAs();
  }

  fetchQAs() {
    this.http.get("http://localhost:8083/qa/")
      .subscribe((data) => {
        this.qas = data;
        this.originalQas = data; // St,ore the original qas array
      });
  }

  deleteQA(id: number) {
    this.http.delete(`http://localhost:8083/qa/delete/${id}`)
      .subscribe((response: any) => {
        console.log("QA supprimée avec succès");
        this.fetchQAs(); // Refresh the QAs after deletion
      });
  }

  recherche() {
    if (this.termeDeRecherche.trim() === '') {
      this.qas = this.originalQas; // Reset to original qas array if search term is empty
    } else {
      this.qas = this.originalQas.filter((qa: any) =>
        qa.question.includes(this.termeDeRecherche) || qa.reponse.includes(this.termeDeRecherche)
      );
    }
  } 
  
}
