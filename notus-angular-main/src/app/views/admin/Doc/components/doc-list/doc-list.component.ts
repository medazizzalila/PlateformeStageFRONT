import { Component } from '@angular/core';
import { DocService } from '../../services/doc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-list',
  
  templateUrl: './doc-list.component.html'
})
export class DocListComponent {
   
  constructor(private docService: DocService ,
    private router: Router ) {}
  docs: any=[];
  
  
 

  ngOnInit() {
    this.getAllDocs();
    
  }

  getAllDocs(){
    this.docService.getAllDocs().subscribe((res) =>{
      console.log(res);
      this.docs = res;
    })
  }
  docDetails(id: number){
    this.router.navigate(['admin/doc-details', id]);
  }

  updateDoc(id: number){
    this.router.navigate(['admin/update-doc', id]);
  }

  addDoc(){
    this.router.navigate(['admin/create-doc']);
  }

  deleteDoc(id: number){
    this.docService.deleteDoce(id).subscribe( (data) => {
      console.log(data);
      this.getAllDocs();
    })
  }

  


}
