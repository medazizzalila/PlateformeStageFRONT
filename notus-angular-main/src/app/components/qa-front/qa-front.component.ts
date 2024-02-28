import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-qa-front',
  templateUrl: './qa-front.component.html',
  styleUrl: './qa-front.component.css'
})
export class QaFrontComponent {

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

  toggleResponse(qa: any) {
    qa.showResponse = !qa.showResponse;
    console.log(qa.showResponse);
  }
}
