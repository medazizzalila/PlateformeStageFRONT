import { Component } from '@angular/core';
import { Doc } from '../../models/doc';
import { DocService } from '../../services/doc.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver-es';

@Component({
  selector: 'app-create-doc',

  templateUrl: './create-doc.component.html'
})
export class CreateDocComponent {
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  doc: Doc = new Doc();
  constructor(private docService: DocService,
    private router: Router) { }

  ngOnInit(): void {
  }
  

  saveDoc(){
    
     this.docService.createDoc(this.doc).subscribe( data =>{
      console.log(data);
      this.goToDocList();
     
    },
    error => console.log(error));
    
  }

  goToDocList(){
    this.router.navigate(['admin/doc']);
  }
  
  onSubmit(){
    console.log(this.doc);
    this.saveDoc();
  }

  validateForm(event: Event): void {
    // Prevent default form submission behavior
    event.preventDefault();

    // Perform validation checks
    let isValid = true;

    
    // Check if num is empty or not a number
    if (!this.doc.id_etud || isNaN(this.doc.id_etud)) {
      alert('Please enter a valid number.');
      isValid = false;
    }
    if (!this.doc.id_societ || isNaN(this.doc.id_societ)) {
      alert('Please enter a valid number.');
      isValid = false;
    }

   
    // If form is valid, submit the form
    if (isValid) {
      this.onSubmit(); // Call your submit function here
    }
  }

  // define a function to upload files
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name); }
    this.docService.upload(formData).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // define a function to download files
  onDownloadFile(filename: string): void {
    this.docService.download(filename).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }


}

