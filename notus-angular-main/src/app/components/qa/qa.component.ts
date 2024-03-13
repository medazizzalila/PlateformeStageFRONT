import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-qa",
  templateUrl: "./qa.component.html",
})

export class QaComponent implements OnInit {
  qas: any;
  originalQas: any; 
  termeDeRecherche = '';
  totalLength:any;
  page:number=1;

  constructor(private http: HttpClient) {}

@ViewChild (MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.fetchQAs();
  }

  fetchQAs() {
    this.http.get("http://localhost:8083/qa/")
      .subscribe((data) => {
        this.qas = data;
        this.originalQas = data; 
      });
  }

  deleteQA(id: number) {
    this.http.delete(`http://localhost:8083/qa/delete/${id}`)
      .subscribe((response: any) => {
        console.log("QA supprimée avec succès");
        this.fetchQAs(); 
      });
  }

  recherche() {
    if (this.termeDeRecherche.trim() === '') {
      this.qas = this.originalQas; 
    } else {
      this.qas = this.originalQas.filter((qa: any) =>
        qa.question.includes(this.termeDeRecherche) || qa.reponse.includes(this.termeDeRecherche)
      );
    }
  } 
  
}
