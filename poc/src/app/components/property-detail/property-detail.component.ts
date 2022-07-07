import { Component, OnInit } from '@angular/core';
import { fetchProperties, fetchProperty, fetchPropertyLoading } from 'src/app/core/properties/property.actions';
import { Store } from '@ngrx/store'
import { Properties } from 'src/app/core/properties/property.state';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  slurp : string | null = '';
  propertyData : any 
  loading: boolean = false
  constructor(private store: Store<{ properties: Properties }>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(fetchPropertyLoading())
    this.slurp = this.activatedRoute.snapshot.paramMap.get('slurp')
    if(this.slurp) {
      this.store.dispatch(fetchProperty({ slurp: this.slurp }))
      this.store.select('properties').subscribe((data) => {
        this.propertyData = data.activeProperty
        this.loading = data.loadingProperty
      })
    }
  };
}
