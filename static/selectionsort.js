var Array_Steps = []; // arrays which holds the details from the swaps of bubble sort

async function selectionSortArray(ARRAY){

    BAR_ARRAY = Array.from(ARRAY);

    Array_Steps = [];

    for(var i = 0; i < BAR_ARRAY.length-1;i++){
      // console.log(BAR_ARRAY[i])
      var index = i;
      for(var j = i+1; j<BAR_ARRAY.length;j++){

        if(BAR_ARRAY[index].value > BAR_ARRAY[j].value){
            index = j;
        // var step = []
        // for(var x = 0; x < BAR_ARRAY.length; x++){
        //   // console.log(BAR_ARRAY[x].height);
        //   var temp = new Bar(BAR_ARRAY[x].height, BAR_ARRAY[x].color, BAR_ARRAY[x].value);
        //   step.push(temp);
        //   // console.log(temp);
        // }
        //   step[j].color = 1;
        //   Array_Steps.push(step);
         }
        var step = []
        for(var x = 0; x < BAR_ARRAY.length; x++){
          // console.log(BAR_ARRAY[x].height);
          var temp = new Bar(BAR_ARRAY[x].height, BAR_ARRAY[x].color, BAR_ARRAY[x].value);
          step.push(temp);
          // console.log(temp);
        }
          step[index].color = 2;
          step[j].color = 0;
          Array_Steps.push(step);
      }

        var temp = BAR_ARRAY[index];
        BAR_ARRAY[index] = BAR_ARRAY[i];
        BAR_ARRAY[i] = temp;
        
        BAR_ARRAY[i].color = 2;

        var step = []
        for(var x = 0; x < BAR_ARRAY.length; x++){
          // console.log(BAR_ARRAY[x].height);
          var temp = new Bar(BAR_ARRAY[x].height, BAR_ARRAY[x].color, BAR_ARRAY[x].value);
          step.push(temp);
          // console.log(temp);
        }
        
        step[index].color = 1;
        step[i].color = 1;
        Array_Steps.push(step);
      }

    var step = [];

        for(var x = 0; x < BAR_ARRAY.length; x++){
          // console.log(BAR_ARRAY[x].height);
          var temp = new Bar(BAR_ARRAY[x].height, 2, BAR_ARRAY[x].value);
          step.push(temp);
          // console.log(temp);
        }
    Array_Steps.push(step);
    return Array_Steps;

  }