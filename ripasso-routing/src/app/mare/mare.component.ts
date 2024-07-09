import { Component } from '@angular/core';

@Component({
  selector: 'app-mare',
  templateUrl: './mare.component.html',
  styleUrls: ['./mare.component.css']
})
export class MareComponent {
    seas = [
      {regione: "Emilia-Romagna", profondita: "300 metri"},
      {regione: "Toscana", profondita: "500 metri"},
      {regione: "Liguria", profondita: "400 metri"}
    ];
}
