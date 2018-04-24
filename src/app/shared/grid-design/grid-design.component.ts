import { Component, Input, OnInit } from '@angular/core';
import { PairsPipe } from 'ngx-pipes';
@Component({
  selector: 'app-grid-design',
  templateUrl: './grid-design.component.html',
  styleUrls: ['./grid-design.component.css'],
  providers: [PairsPipe]
})
export class GridDesignComponent implements OnInit {
  public a;
  @Input() keyValue: any;
  constructor(public pipe: PairsPipe) { }

  ngOnInit() {
    this.a = this.pipe.transform(this.keyValue[0]) //this is pair pipe which gives my key and value in array 


  }


  //check whether the value coming from api is empty or not
  public checkValue = (value: any): any => {

    if (typeof (value) == "object") {
      if (value == null || value == undefined) {
        return false;
      }
      else {
        return true;
      }
    }

    if (value != "" || value[0] !== "") {
      return true;
    }
    else {
      return false;
    }


  }//end
}
