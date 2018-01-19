import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-ongoing-activities',
  templateUrl: './main-ongoing-activities.component.html',
  styleUrls: ['./main-ongoing-activities.component.css',
              '../../activities.component.css']
})
export class MainOngoingActivitiesComponent implements OnInit {

    showSales : boolean;
    showFeaturedProducts : boolean;
    showDiscountForCustomer : boolean;
    showCustomerRetention : boolean;

    constructor() { }

    ngOnInit() {
    }

    displaySales(){
        this.showSales =! this.showSales;
    }

    displayFeaturedProducts(){
        this.showFeaturedProducts =! this.showFeaturedProducts;
    }

    displayDiscountForCustomer(){
        this.showDiscountForCustomer =! this.showDiscountForCustomer;
    }

    displayCustomerRetention(){
        this.showCustomerRetention =! this.showCustomerRetention;
    }
}
