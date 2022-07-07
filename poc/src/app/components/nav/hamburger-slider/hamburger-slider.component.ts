import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger-slider',
  templateUrl: './hamburger-slider.component.html',
  styleUrls: ['./hamburger-slider.component.scss']
})
export class HamburgerSliderComponent implements OnInit {

  @Output() closeSliderFunc : EventEmitter<any> = new EventEmitter();
  @Output() logout : EventEmitter<any> = new EventEmitter();
  @Input() openSlider! : boolean
  @Input() loggedIn! : boolean

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    /*
    if (changes['openSlider'] && changes['openSlider'].currentValue) {
      this.openSlider = changes['openSlider'].currentValue
      console.log(changes['openSlider'].currentValue)
    }
    */
   //console.log(changes)
  }

}
