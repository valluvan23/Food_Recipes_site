import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureselect = new EventEmitter<string>();

  onselect(feature: string){
    this.featureselect.emit(feature);

  }

}
