import { Component, HostListener } from '@angular/core';
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
  showChatbot = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQAs();
    this.adjustHeight();
  }

  fetchQAs() {
    let response = this.http.get("http://localhost:8083/qa/");
    response.subscribe((data) => {
      this.qas = data;
      // Adjust height after fetching QAs
      this.adjustHeight();
    });
  }

  toggleResponse(qa: any) {
    qa.showResponse = !qa.showResponse;
    console.log(qa.showResponse);
    // Adjust height after toggling response
    this.adjustHeight();
  }
  
  openChatbot() {
    this.showChatbot = true;
    // Adjust height after opening chatbot
    this.adjustHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.adjustHeight();
  }

  adjustHeight() {
    const tableWrapper = document.getElementById('table-wrapper');
    const windowHeight = window.innerHeight;
    const wrapperHeight = tableWrapper.getBoundingClientRect().height;
    const extraSpace = 100; // Adjust this value as needed for extra space at the bottom

    if (wrapperHeight > windowHeight - extraSpace) {
      document.body.style.height = wrapperHeight + 'px';
    } else {
      document.body.style.height = 'auto';
    }
  }
}
