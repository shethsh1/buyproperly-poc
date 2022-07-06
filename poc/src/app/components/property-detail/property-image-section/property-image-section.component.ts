import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-image-section',
  templateUrl: './property-image-section.component.html',
  styleUrls: ['./property-image-section.component.scss']
})
export class PropertyImageSectionComponent implements OnInit {
  @Input() propertyData : any

  constructor() { }

  ngOnInit(): void {
    console.log(this.propertyData)
  }

}
