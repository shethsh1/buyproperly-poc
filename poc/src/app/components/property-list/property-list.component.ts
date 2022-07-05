import { Component, OnInit } from '@angular/core';
import { fetchProperties } from 'src/app/core/properties/property.actions';
import { Store } from '@ngrx/store'
import { Properties } from 'src/app/core/properties/property.state';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties: Properties = {
    data: [],
    totalCount: 0
  };


  constructor(private store: Store<{ properties: Properties }>) { }

  ngOnInit(): void {
    this.store.dispatch(fetchProperties({ limit: 10, offset: 0 }))
    this.store.select('properties').subscribe((data) => {
      this.properties = data
    })

  }

  notAdvertisement(val: boolean | null) {
    if(val === true) {
      return false
    } else {
      return true
    }
  }

}
