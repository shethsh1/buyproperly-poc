import { Component, OnInit } from '@angular/core';
import { fetchProperties, fetchProperty } from 'src/app/core/properties/property.actions';
import { Store } from '@ngrx/store'
import { Properties } from 'src/app/core/properties/property.state';

interface CurrentProperties extends Properties {
  page : number,
  totalPossiblePages: number,
  limit: number,
  offset: number
}

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties: CurrentProperties = {
    data: [],
    totalCount: 0,
    page: 1,
    totalPossiblePages: 1,
    limit: 10,
    offset: 0
  };
  numbers : number[] = []

  constructor(private store: Store<{ properties: Properties }>) { }

  ngOnInit(): void {
    this.store.dispatch(fetchProperties({ limit: this.properties.limit, offset: this.properties.offset }))
    this.store.select('properties').subscribe((data) => {

      let totalPages : number = 1
      while(data.totalCount > totalPages * 10) {
        totalPages++
      }

      this.numbers = Array(totalPages).fill(0).map((x,i)=>i+1);

      this.properties = {
        ...this.properties,
        data: data.data,
        totalCount: data.totalCount,
        page: 1,
        totalPossiblePages: totalPages,
      }
    })
  }

  notAdvertisement(val: boolean | null) : boolean {
    if(val === true) {
      return false
    } else {
      return true
    }
  }

  setPagination(page : number) {
    this.store.dispatch(fetchProperties({ limit: page * 10, offset: (page - 1) * 10 }))
    this.store.select('properties').subscribe((data) => {
      this.properties.data = data.data
      this.properties.page = page
    })
  }

  setProperty(slurp : string | null) : void {
    if(slurp) {
      this.store.dispatch(fetchProperty({ slurp }))
    }
  }


}
