var Array_Steps = []; // arrays which holds the details from the swaps of bubble sort

var MIN;
var MAX;

async function insertionSortArray(ARRAY){

    BAR_ARRAY = Array.from(ARRAY);

    Array_Steps = [];
    var j;

    for(var i = 1; i < BAR_ARRAY.length;i++){
      // console.log(BAR_ARRAY[i])
      var key = BAR_ARRAY[i];

      j = i -1;
      while(j >=0 && key.value < BAR_ARRAY[j].value){
        BAR_ARRAY[j + 1] = BAR_ARRAY[j];
        j -= 1;
        BAR_ARRAY[j + 1] = key; // key
        var step = [];

        for(var x = 0; x < BAR_ARRAY.length; x++){
          // console.log(BAR_ARRAY[x].height);
          var temp = new Bar(BAR_ARRAY[x].height, BAR_ARRAY[x].color, BAR_ARRAY[x].value);
          step.push(temp);
          // console.log(temp);
        }

        step[i].color = 0;
        // step[j].color = 1;
        step[j+1].color = 1;

        Array_Steps.push(step);
      }
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