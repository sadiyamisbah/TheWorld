import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<object>, args: string[]): any {
    if (array == null) {
      return null;
    }
    //This is for first filter ascending descending
    if (args[1].length == 0 && args[2].length==0) {
      let finalData = sorting(array);
      return finalData;
    }

     //next condition,this is for if filter by name is not empty
     if (args[1].length != 0 && args[2].length==0) {
      let newArray = array.filter((val) => {
        let A = val['name'].toLowerCase();
        let B = args[1].toLowerCase();
        return A.search(B) > -1;
      });

      let finalData = sorting(newArray);
      return finalData;

    }//end

    //next condition,this is for if filter by capital is not empty
    if (args[1].length == 0 && args[2].length!=0) {
      let newArray = array.filter((val) => {
        let A = val['capital'].toLowerCase();
        let B = args[2].toLowerCase();
        return A.search(B) > -1;
      });

      let finalData = sorting(newArray);
      return finalData;

    }//end

    //next condition,this is for if filter by name and by capital is not empty
    if (args[1].length != 0 && args[2].length!=0) {
      let newArray = array.filter((val) => {
        let A = val['capital'].toLowerCase();
        let B = args[2].toLowerCase();
        let C=val['name'].toLowerCase();
        let D=args[1].toLowerCase();
        return A.search(B) > -1 && C.search(D) > -1;
      });

      let finalData = sorting(newArray);
      return finalData;

    }//end

    //Function for sorting in ascending and descending order
    function sorting(myArray): any {
      if (args[0] == "ascending") {
        myArray.sort((a: any, b: any) => {

          let A = a['name'].toLowerCase();
          let B = b['name'].toLowerCase();
          return (A < B) ? -1 : (A > B) ? 1 : 0;
        });
        return myArray;
      }
      if (args[0] == "descending") {
        myArray.sort((a: any, b: any) => {

          let A = a['name'].toLowerCase();
          let B = b['name'].toLowerCase();
          return (A > B) ? -1 : (A < B) ? 1 : 0;
        });
        return myArray;
      }

    }//end








  }

}
