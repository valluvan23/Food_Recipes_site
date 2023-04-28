import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food_Project';
  feature:string='recipe';

  onselectfeature(feacturecom:string){
    this.feature= feacturecom;

  }
}
