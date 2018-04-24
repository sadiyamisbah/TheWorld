import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WorldInfoService } from '../../world-info.service';
import { AllCountry } from '../../api-interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {
  public countryName: string;
  public countryInfo: AllCountry;
  public translation: any[] = [];

  public flag: string;
  constructor(private spinnerService: Ng4LoadingSpinnerService, private _route: ActivatedRoute, private router: Router, private world: WorldInfoService, private location: Location) { }

  ngOnInit() {
    this.spinnerService.show();
    this.countryName = this._route.snapshot.paramMap.get('code');
    this.world.getSingleCountry(this.countryName).subscribe(
      (data) => {
        setTimeout(() => {
          this.countryInfo = data[0];
          this.flag = this.countryInfo.flag;
          this.getTrans(this.countryInfo.translations);
          this.spinnerService.hide();
        }, 2000);

      },
      err => {
        alert("error")
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

  //method to get translation proprty
  public getTrans = (data): any => {
    for (let i in data) {
      if (data[i] != null || data[i] != undefined) {
        this.translation.push(data[i]);
      }
    }
    console.log(this.translation)
    return this.translation;
  }

  public goBack = (): any => {
    this.location.back();
  }//end

}





