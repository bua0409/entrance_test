function adjacentElementsProduct(inputArray){
    var multiArray = [];
    var multiple = 0;
    for (var i = 0; i <inputArray.length;i++) {
      multiple = inputArray[i]*inputArray[i+1]
      multiArray.push(multiple)
      };
    var maxOfMultiArray = 0;
    for(var i = 0; i < multiArray.length;i++) {
      if(multiArray[i]>maxOfMultiArray){
        maxOfMultiArray = multiArray[i]; 
      }
    }
    return("max of multi",maxOfMultiArray)
  }
  adjacentElementsProduct([2,3,4,5,5,6,6,7,-7,-8])
  
  
  
  function alternatingSums(a) {
      var team1Weight = 0 ;
      var team2Weight = 0 ;
      for(let i =0; i < a.length; i++){
        if(i % 2 == 0 ){
          team1Weight += a[i];
        }
        else{
          team2Weight += a[i];
        }
      }
      return {team1Weight,team2Weight};
  }
  alternatingSums([44,33,55,66,77,88,99,43,54])