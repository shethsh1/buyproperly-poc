import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() property : any;
  @Input() notAdvertisement : any;
  @Input() setProperty : any;


  ngOnInit(): void {

  }

}
