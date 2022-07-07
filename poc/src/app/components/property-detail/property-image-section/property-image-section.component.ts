import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-property-image-section',
  templateUrl: './property-image-section.component.html',
  styleUrls: ['./property-image-section.component.scss']
})
export class PropertyImageSectionComponent implements OnInit {
  @Input() propertyData : any
  currentIndex : number = 0;
  @ViewChild('carousel') carousel!: ElementRef;
  reached: boolean = false



  constructor() { }

  ngOnInit(): void {

  }


  getImage(index : number) {
    if(index < 0) {
      return this.propertyData.images[this.propertyData.images.length - 1]
    } else if( index >= this.propertyData.images.length) {
      return this.propertyData.images[0]
    } else {
      return this.propertyData.images[index % this.propertyData.images.length]
    }

  }



  incrementIndex() {



    const active : HTMLElement = this.carousel.nativeElement.querySelector('[data-active]')
    const left : HTMLElement = this.carousel.nativeElement.querySelector('[data-left]')
    const right : HTMLElement = this.carousel.nativeElement.querySelector('[data-right]')



    active.removeAttribute('data-active')
    left.removeAttribute('data-left')
    right.removeAttribute('data-right')
 
    active.setAttribute('data-right', '')
    left.setAttribute('data-active', '')
    right.setAttribute('data-left', '')

    if(left === this.carousel.nativeElement.firstChild) {
      this.currentIndex += 2
      if(this.currentIndex >= this.propertyData.images.length) {
        this.currentIndex = 0
      }
      return
    }
  }

  decrementIndex() {
    const active : HTMLElement = this.carousel.nativeElement.querySelector('[data-active]')
    const left : HTMLElement = this.carousel.nativeElement.querySelector('[data-left]')
    const right : HTMLElement = this.carousel.nativeElement.querySelector('[data-right]')

    active.removeAttribute('data-active')
    left.removeAttribute('data-left')
    right.removeAttribute('data-right')
 
    active.setAttribute('data-left', '')
    left.setAttribute('data-right', '')
    right.setAttribute('data-active', '')

    if(right === this.carousel.nativeElement.firstChild) {
      this.currentIndex -= 2
      if(this.currentIndex < 0) {
        this.currentIndex = this.propertyData.images.length - 1
      }
      return
    }
    
  }

}
