import { Component, OnInit } from '@angular/core';
import { UnitDetails } from '../../Models/unit-details';
import { UnitService } from '../../Services/unit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit{

    ////////// For Offer ///////////////
  //   addedOffer: Offer = {
  //     id: 0,
  //     message: '',
  //     price: 0,
  //     unitBuildingID: 0,
  //     buyerID: '',
  //     ownerID: '',
  // }



    unitDetails: UnitDetails = {
      name: '',
      description: '',
      floorNumber: 0,
      area: 0,
      governamnet: '',
      city: '',
      address: '',
      location: '',
      unitType : 0,
      priceType: 0,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      capacityRoom: 0,
      capacityBathRoom: 0,
      coverImageString:'',
      unitImagesString: ''
    }

    selectedImage: String = '';
    constructor(private unitservice: UnitService,private route: ActivatedRoute,
      // private offerservice : OfferService,
    ) {}

    ngOnInit(): void {
      console.log("On Init **************");

      this.route.paramMap.subscribe((params) => {

        const id = params.get('id')!;
        console.log("===== id ===",id);

        // if (id) {
        //   this.addedOffer.unitBuildingID = Number(id);
        // }

        this.unitservice.getUnitDetails(id).subscribe({
          next: (response) => {

            this.unitDetails = response;
            console.log("UnitDetail===>>> ",this.unitDetails);

            this.selectedImage = "http://localhost:5219/UnitImages/"+this.unitDetails.coverImageString;
            console.log("SelectedImage===>>> ",this.selectedImage);
          },
          error: (error) => {
            console.log(error);
          }
        });
      });
    }

    selectImage(index: number) {
      this.selectedImage = "http://localhost:5219/UnitImages/"+this.unitDetails.unitImagesString!.split(',')[index];
    }

     token:string|null = localStorage.getItem('token');


    ////////// For Offers///////////////
    // addOfferComponent() {
    //   // const token = localStorage.getItem('token');

    //   if (this.token) {
    //     this.addedOffer.buyerID = this.token;
    //   }

    //   this.addedOffer.ownerID = this.unitDetails.ownerId

    //   this.offerservice.addOffer(this.addedOffer).subscribe({
    //     next: (value) => {
    //       alert("Added offer"),
    //       this.addedOffer.message = '';
    //       this.addedOffer.price = 0;
    //     },
    //     error: (err) => console.log(err)
    //   })
    // }

}
