import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WorldInfoService } from '../../world-info.service';
import { AllCountry } from '../../api-interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlphabetSortPipe } from '../../alphabet-sort.pipe';
@Component({
  selector: 'app-all-country-view',
  templateUrl: './all-country-view.component.html',
  styleUrls: ['./all-country-view.component.css'],
  providers: [Location, AlphabetSortPipe]
})
export class AllCountryViewComponent implements OnInit {
  public entityValue: string;
  public entityName: string;
  public countryList: AllCountry[];
  public inputValue: string = "ascending";
  public textValueName: string = "";
  public textValueCapital: string = "";
  public countryListDup: AllCountry[];   //this is for when alphabet filter is applied then needs to copy the original data
  p: number = 1;
  constructor(public alphabet: AlphabetSortPipe, private spinnerService: Ng4LoadingSpinnerService, private _route: ActivatedRoute, private router: Router, private world: WorldInfoService, private location: Location) {

  }

  ngOnInit() {
    console.log("called");

    this._route.params.subscribe(val => {
      this.spinnerService.show();
      this.entityName = this._route.snapshot.paramMap.get('entityName');
      this.entityValue = this._route.snapshot.paramMap.get('entityValue');

      this.world.getAllCountries(this.entityName, this.entityValue).subscribe(
        (data) => {
          setTimeout(() => {

            this.countryList = data;
            this.countryListDup = data;
            this.spinnerService.hide();
          }, 2000);

        },
        err => {
          alert("error")
        });
    });

  }

  //check whether the value coming from api is empty or not
  public checkValue = (value: any): boolean => {
    if (value.length != 0 && value[0] !== "") {
      return true;
    }
    else {
      return false;
    }

  }//end

  //Method to make my country name short i.e.avoiding bracket content
  public setName = (value: string): string => {
    let pos = value.indexOf('(');
    if (pos != -1) {
      let name = value.substring(0, pos);
      return name;
    }
    else {
      return value;
    }
  }//end

  //method to remove special character which i have used in my tabs href
  public removeSpecialChar = (value: string): string => {
    return value.replace(/[^A-Za-z]/g, '');
  }//end

  //method to call my alphabet pipe 
  public alphabetSort = (value: string): any => {
    this.countryList = this.countryListDup;
    this.countryList = this.alphabet.transform(this.countryList, value);

  }//end

  //method to go to previous location
  public goBack = (): any => {
    this.location.back();
  }//end



}


