import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-qa",
  templateUrl: "./qa.component.html",
})

export class QaComponent implements OnInit {
  
  
  qas: any;
  question: String;
  reponse: String;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQAs();
  }

  fetchQAs() {
    let response = this.http.get("http://localhost:8083/qa/");
    response.subscribe((data) => this.qas = data);
  }

  
  deleteQA(id: number) {
  this.http.delete(`http://localhost:8083/qa/delete/${id}`)
    .subscribe((response: any) => { // Specify the response type as 'any'
      console.log("QA supprimée avec succès");
      // Actualiser les données QA après la suppression
      this.fetchQAs();
    });
}
loadQA(id: number) {
  this.http.get(`http://localhost:8083/qa/${id}`)
    .subscribe((qa: any) => {
      this.question = qa.question;
      this.reponse = qa.reponse;
    });
}


}
