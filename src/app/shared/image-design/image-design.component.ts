import { Component,Input, OnInit } from '@angular/core';
import {PairsPipe} from 'ngx-pipes';
import { DomSanitizer, SafeResourceUrl, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-image-design',
  templateUrl: './image-design.component.html',
  styleUrls: ['./image-design.component.css'],
  providers: [PairsPipe]
})
export class ImageDesignComponent implements OnInit {
  public imageUrl:SafeResourceUrl;
  @Input() keyValue:any;
  @Input() url:any;
  @Input() pos:number;
 public a;
  constructor(public pipe:PairsPipe,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.a=this.pipe.transform(this.keyValue[0]);//this is pair pipe which gives my key and value in array 
   
    this.imageUrl=this.domSanitizer.bypassSecurityTrustUrl(this.url);
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


}
