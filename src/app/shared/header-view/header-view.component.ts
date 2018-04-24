import { Component,  Input,OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css']
})
export class HeaderViewComponent implements OnInit {
 public imageUrl:SafeResourceUrl;
 @Input() url:any;
 @Input() heading:string;
 @Input() subheading:string;
 @Input() color:string;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
   
    this.imageUrl=this.domSanitizer.bypassSecurityTrustStyle("url("+this.url+")");
    console.log(this.imageUrl)
  }

}
