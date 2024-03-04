import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-offrestravail",
  templateUrl: "./offrestravail.component.html",
})

export class OffrestravailComponent implements OnInit {
  offretravaux: any;
  originalOffretravaux: any; // Store the original offretravaux array
  termeDeRecherche = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOffretravaux();
  }

  fetchOffretravaux() {
    this.http.get("http://localhost:8083/offretravail/")
      .subscribe((data) => {
        this.offretravaux = data;
        this.originalOffretravaux = data; // Store the original offretravaux array
      });
  }

  deleteOffretravail(id: number) {
    this.http.delete(`http://localhost:8083/offretravail/delete/${id}`)
      .subscribe((response: any) => {
        console.log("Offretravail deleted successfully");
        this.fetchOffretravaux(); // Refresh the offretravaux after deletion
      });
  }

  recherche() {
    if (this.termeDeRecherche.trim() === '') {
      this.offretravaux = this.originalOffretravaux; // Reset to original offretravaux array if search term is empty
    } else {
      this.offretravaux = this.originalOffretravaux.filter((offretravail: any) =>
        offretravail.descrip.includes(this.termeDeRecherche)
      );
    }
  }


}
