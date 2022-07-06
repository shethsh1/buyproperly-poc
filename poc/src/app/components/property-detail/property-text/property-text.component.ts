import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-text',
  templateUrl: './property-text.component.html',
  styleUrls: ['./property-text.component.scss']
})
export class PropertyTextComponent implements OnInit {
  @Input() propertyData : any

  constructor() { }

  ngOnInit(): void {
  }

}
