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
  totalLength:any;
  page:number=1;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQAs();
    this.adjustHeight();
  }

  fetchQAs() {
    let response = this.http.get("http://localhost:8083/qa/");
    response.subscribe((data) => {
      this.qas = data;
      
      this.adjustHeight();
    });
  }

  toggleResponse(qa: any) {
    qa.showResponse = !qa.showResponse;
    console.log(qa.showResponse);
    this.adjustHeight();
  }
  
  openChatbot() {
    this.showChatbot = true;
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
    const extraSpace = 100; 

    if (wrapperHeight > windowHeight - extraSpace) {
      document.body.style.height = wrapperHeight + 'px';
    } else {
      document.body.style.height = 'auto';
    }
  }
}
