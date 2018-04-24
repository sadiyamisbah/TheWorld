import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetSort'
})
export class AlphabetSortPipe implements PipeTransform {

  transform(array: Array<object>, args: string): any {
    if (array == null) {
      return null;
    }
    //This is for 'all' button which is in allcountry view and its returning whole country list
    if(args=="All"){
      return array;
    }
    //This is for giving country list according to first alphabet
    let newArray = array.filter((val)=>{
      let A = val['name'].toUpperCase();
      
      return A.charAt(0)==args;
    });
    return newArray;
  }

}
