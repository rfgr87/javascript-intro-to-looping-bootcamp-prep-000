
function forLoop(array){
  for(let i =0; i<25; i++){
    if (i === 1){
      array = [...array, "I am 1 strange loop"]
    }
    else if(i>1){
      array = [...array, `I am ${i} strange loops`]
    }
  }
  return array
}

//console.log(forLoop([1,2,3]))

function whileLoop(number){
  while(number > -1){
    console.log(number)
    number--
  }
  return "done"
}

//console.log(whileLoop(10))

