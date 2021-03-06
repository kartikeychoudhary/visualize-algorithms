var Array_Steps = []; // arrays which holds the details from the swaps of bubble sort
var Array_Swap = [];
var Array_Index = [];

var MIN;
var MAX;

var url = "http://127.0.0.1:5000/bubblesort";

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  async function bubblesort(BAR_ARRAY){

    Array_Steps = []; 
    Array_Swap = [];
    Array_Index = [];

    var swap = 0;
    for(var i = 0; i < BAR_ARRAY.length; i++){
      for(var j = 0; j< BAR_ARRAY.length-i-1; i++){

        if(BAR_ARRAY[j].value > BAR_ARRAY[j+1].value){
          swap += 1;
          BAR_ARRAY[j].color = 1;
          BAR_ARRAY[j+1].color = 1;
          Array_Steps.push(BAR_ARRAY);
          // BAR_ARRAY[j].color = -1;
          // BAR_ARRAY[j+1].color = -1;

          // var temp = BAR_ARRAY[j]
          // BAR_ARRAY[j] = BAR_ARRAY[j+1]
          // BAR_ARRAY[j+1] = temp;
          
          // Array_Steps.push(BAR_ARRAY);
        }else{
          BAR_ARRAY[j].color = 0;
          BAR_ARRAY[j+1].color = 0;
          Array_Steps.push(BAR_ARRAY);
          // BAR_ARRAY[j].color = -1;
          // BAR_ARRAY[j+1].color = -1;

        }
      }

      if(swap == 0){
        break;
      }
      
    }

    return Array_Steps;
  }


  async function bubbleSortArray(ARRAY){

    BAR_ARRAY = Array.from(ARRAY);

    Array_Steps = [];
    var swap = 0;


    for(var i = 0; i < BAR_ARRAY.length; i++){
      for(var j = 0; j < BAR_ARRAY.length-1-i; j++){
        // console.log(BAR_ARRAY[j].height, BAR_ARRAY[j].value, BAR_ARRAY[j].color)

        if(BAR_ARRAY[j].value > BAR_ARRAY[j+1].value){
          swap += 1;

          // BAR_ARRAY[j].color = 1;
          // BAR_ARRAY[j+1].color = 1;
          // Array_Steps.push(BAR_ARRAY);
          // BAR_ARRAY[j].color = -1;
          // BAR_ARRAY[j+1].color = -1;

          var temp = BAR_ARRAY[j]
          BAR_ARRAY[j] = BAR_ARRAY[j+1]
          BAR_ARRAY[j+1] = temp;
          var step = [];

          for(var x = 0; x < BAR_ARRAY.length; x++){
            // console.log(BAR_ARRAY[x].height);
            var temp = new Bar(BAR_ARRAY[x].height, BAR_ARRAY[x].color, BAR_ARRAY[x].value);
            step.push(temp);
            // console.log(temp);
          }

          // var step = Array.from(BAR_ARRAY);

          // console.log(step);
          // sleep(20);

          step[j].color = 1;
          step[j+1].color = 1;
          Array_Steps.push(step);

          // BAR_ARRAY[j].color = -1;
          // BAR_ARRAY[j+1].color = -1;

        }else{

          var step = [];

          for(var x = 0; x < BAR_ARRAY.length; x++){
            // console.log(BAR_ARRAY[x].height);
            var temp = new Bar(BAR_ARRAY[x].height, BAR_ARRAY[x].color, BAR_ARRAY[x].value);
            step.push(temp);
            // console.log(temp);
          }

          // var step = Array.from(BAR_ARRAY);

          step[j].color = 0;
          step[j+1].color = 0;
          Array_Steps.push(step);

          // BAR_ARRAY[j].color = -1;
          // BAR_ARRAY[j+1].color = -1;

        }

      }
      BAR_ARRAY[BAR_ARRAY.length-1-i].color=2;
      if(swap == 0){
        break;
      }
    }
    console.log(Array_Steps);
    return Array_Steps;

  }