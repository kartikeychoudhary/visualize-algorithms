var Array_Steps = []; // arrays which holds the details from the swaps of bubble sort


function partition(ARRAY, low, high){
    var i = low-1;
    var pivot = ARRAY[high]
    
    for(var j = low; j < high;j++){

        if(ARRAY[j].value < pivot.value){
            i = i+1;
            var temp = ARRAY[i];
            ARRAY[i] = ARRAY[j];
            ARRAY[j] = temp;

            var step = [];

        for(var x = 0; x < ARRAY.length; x++){
            // console.log(BAR_ARRAY[x].height);
            var temp = new Bar(ARRAY[x].height, ARRAY[x].color, ARRAY[x].value);
            step.push(temp);
            // console.log(temp);
          }

          step[low].color = 0;
          step[high].color = 0;
          step[j].color = 1;
          step[i].color = 1;
          Array_Steps.push(step);


        }
        else{

            var step = [];

        for(var x = 0; x < ARRAY.length; x++){
            // console.log(BAR_ARRAY[x].height);
            var temp = new Bar(ARRAY[x].height, ARRAY[x].color, ARRAY[x].value);
            step.push(temp);
            // console.log(temp);
          }
          step[low].color = 0;
          step[high].color = 0;
          step[j].color = 1;
          step[i+1].color = 2;

          Array_Steps.push(step);

        }
        
    }
    var temp = ARRAY[i+1];
    ARRAY[i+1] = ARRAY[high];
    ARRAY[high] = temp;
      
    return i+1; 
}

function quicksort(ARRAY, low, high){
    if(low < high){
        var part = partition(ARRAY, low, high);
        
        quicksort(ARRAY, low, part-1);

        var step = [];

        // for(var x = 0; x < BAR_ARRAY.length; x++){
        //   // console.log(BAR_ARRAY[x].height);
        //   var temp = new Bar(BAR_ARRAY[x].height, BAR_ARRAY[x].color, BAR_ARRAY[x].value);
        //   step.push(temp);
        //   // console.log(temp);
        // }
        // step[low].color = 1;
        // step[high].color = 1;
        // Array_Steps.push(step); 

        quicksort(ARRAY, part+1, high); 
    }else{
        return;
    }
       
}

async function quickSortArray(ARRAY){

    BAR_ARRAY = Array.from(ARRAY);

    Array_Steps = [];
    // console.log(ARRAY);

    quicksort(ARRAY, 0, ARRAY.length-1);

    var step = [];

    for(var x = 0; x < ARRAY.length; x++){
      // console.log(BAR_ARRAY[x].height);
      var temp = new Bar(ARRAY[x].height, 2, ARRAY[x].value);
      step.push(temp);
      // console.log(temp);
    }
    Array_Steps.push(step);
    return Array_Steps

  }