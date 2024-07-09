import { Component } from '@angular/core';

@Component({
  selector: 'app-montagna',
  templateUrl: './montagna.component.html',
  styleUrls: ['./montagna.component.css']
})
export class MontagnaComponent {
    mountains = [
      {regione: "Lombardia", altitudine: "1600 metri"},
      {regione: "Veneto", altitudine: "2000 metri"},
      {regione: "Trentino Alto-Adige", altitudine: "3000 metri"}
    ];
}
